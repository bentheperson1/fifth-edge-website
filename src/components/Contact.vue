<template>
  <section class="contact">
    <h1>Contact</h1>
    <dl class="contact-list">
      <div class="row">
        <dt>Press &amp; general inquiries</dt>
        <dd><a href="mailto:staff@fifthedgestudios.com">staff@fifthedgestudios.com</a></dd>
      </div>
      <div class="row">
        <dt>Lead developer</dt>
        <dd><a href="mailto:ben@fifthedgestudios.com">ben@fifthedgestudios.com</a></dd>
      </div>
      <div class="row">
        <dt>Community &amp; support</dt>
        <dd><a href="https://discord.gg/RnfJTVMjrP" target="_blank" rel="noopener">Join our Discord</a></dd>
      </div>
    </dl>
    <p class="note">
      Writing about one of our games? The <router-link to="/press">press kit</router-link> has fact sheets,
      screenshots, and logos.
    </p>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  max-width: 760px;
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
}
h1 {
  font-family: 'Poppins Bold', 'Poppins', sans-serif;
  font-size: 2.5rem;
  margin: 0 0 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 4px solid var(--secondary-color);
}
.contact-list {
  margin: 0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #262626;
}
dt {
  color: var(--muted-text);
}
dd {
  margin: 0;
  font-size: 1.15rem;
}
a {
  color: var(--link-color);
}
.note {
  color: var(--muted-text);
  margin-top: 2.5rem;
}
</style>
