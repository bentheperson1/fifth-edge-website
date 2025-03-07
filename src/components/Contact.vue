<template>
  <section class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <h3>We love hearing from you!</h3>
      <br>
      <ul class="contact-list">
        <li>
          <strong>Discord Server:</strong>
          <a href="https://discord.gg/RnfJTVMjrP" target="_blank" rel="noopener noreferrer">
            Join Here!
          </a>
        </li>
        <li>
          <strong>Staff Email: </strong>
          <a href="mailto:staff@fifthedgestudios.com">staff@fifthedgestudios.com</a>
        </li>
        <li>
          <strong>BlueSky:</strong>
          <a href="https://bsky.app/profile/fifth-edge.bsky.social" target="_blank" rel="noopener noreferrer">
            @fifth-edge
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.contact {
  padding: 4rem 1rem;
  text-align: center;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
.contact-list {
  list-style: none;
  padding: 0;
}
.contact-list li {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.6;
}
.contact-list a {
  color: #007bff;
  text-decoration: none;
}
.contact-list a:hover {
  text-decoration: underline;
}
</style>
