<template>
  <div>
    <div class="page-header">
      <SectionLabel text="Studio" />

      <div class="page-title">
        ABOUT
        <br />
        THE STUDIO
      </div>
    </div>

    <section class="about-hero">
      <div class="about-statement">
        Fifth Edge Studios is an
        <em>independent</em>
        game studio building arcade-inspired action games.
      </div>
    </section>

    <StatsRow />

    <AboutColumns
      left-title="Our Philosophy"
      left-body="We build games designed to be picked up and played immediately."
      right-title="What We Make"
      right-body="Our catalog spans beat em ups, roguelites, platformers, and shooters."
    />

    <AboutColumns
      left-title="Tools & Tech"
      left-body="All games are built using GameMaker with a heavy pixel-art sensibility."
      right-title="Get In Touch"
      right-body="Follow us online for updates, releases, and new projects."
    />
  </div>
</template>

<script setup>
import SectionLabel from '../components/SectionLabel.vue'
import StatsRow from '../components/StatsRow.vue'
import AboutColumns from '../components/AboutColumns.vue'
</script>
