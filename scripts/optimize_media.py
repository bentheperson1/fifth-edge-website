"""Generate web-sized versions of site media.

Run from the repo root:  python scripts/optimize_media.py
Requires Pillow (pip install pillow) and ffmpeg on PATH.

Source art stays untouched; outputs go to src/assets/optimized/ and are
what the components import. Add new entries to IMAGES when adding art.
"""
import io
import subprocess
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src" / "assets"
OUT = SRC / "optimized"

# source file -> widths to generate (never upscales)
IMAGES = {
    # game page heroes
    "images/runner-banner.png": [960, 1920],
    "images/boss_breaker_header.png": [960, 1920],
    "images/owlchemist.png": [960, 1920],
    "images/slimecorp.png": [640],
    # press kit thumbnails (full-res originals are linked for download)
    **{f"images/{n}.png": [640] for n in (
        "bb-01", "bb-02", "bb-03", "bb-04", "bb-05", "bb-06",
        "owl-01", "owl-02", "owl-03", "owl-04",
        "sc-01", "sc-02", "sc-03",
    )},
    "images/runner.png": [640, 1280],
    # team
    "images/snowy.jpg": [384],
}

VIDEOS = {
    # the home hero is blurred heavily, so a small, silent encode looks identical
    "videos/BossBreakerTrailer.mp4": "hero-loop",
}


def encode_webp(im: Image.Image) -> bytes:
    """Lossy WebP, unless lossless is about as small (flat pixel art)."""
    lossy, lossless = io.BytesIO(), io.BytesIO()
    im.save(lossy, "WEBP", quality=80, method=6)
    im.save(lossless, "WEBP", lossless=True, method=6)
    if lossless.tell() <= lossy.tell() * 1.1:
        return lossless.getvalue()
    return lossy.getvalue()


def optimize_images():
    for rel, widths in IMAGES.items():
        src = SRC / rel
        im = Image.open(src)
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        for w in widths:
            w = min(w, im.width)
            h = round(im.height * w / im.width)
            resized = im if w == im.width else im.resize((w, h), Image.LANCZOS)
            dest = OUT / f"{src.stem}-{w}.webp"
            dest.write_bytes(encode_webp(resized))
            print(f"{dest.relative_to(ROOT)}  {dest.stat().st_size // 1024} KB")


def optimize_videos():
    for rel, name in VIDEOS.items():
        src = SRC / rel
        mp4 = OUT / f"{name}.mp4"
        poster = OUT / f"{name}-poster.webp"
        subprocess.run([
            "ffmpeg", "-y", "-loglevel", "error", "-i", str(src),
            "-an", "-vf", "scale=640:-2,fps=24",
            "-c:v", "libx264", "-preset", "slow", "-crf", "34",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(mp4),
        ], check=True)
        subprocess.run([
            "ffmpeg", "-y", "-loglevel", "error", "-ss", "1", "-i", str(src),
            "-frames:v", "1", "-vf", "scale=854:-2", "-c:v", "libwebp",
            "-quality", "70", str(poster),
        ], check=True)
        for f in (mp4, poster):
            print(f"{f.relative_to(ROOT)}  {f.stat().st_size // 1024} KB")


if __name__ == "__main__":
    OUT.mkdir(exist_ok=True)
    optimize_images()
    optimize_videos()
