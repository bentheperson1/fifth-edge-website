<template>
  <section class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <br>

      <h1>
        Press & General Contact: <a href="mailto:staff@fifthedgestudios.com">staff@fifthedgestudios.com</a>
      </h1>
      <h1>
        Direct Contact to Lead Dev: <a href="mailto:ben@fifthedgestudios.com">ben@fifthedgestudios.com</a>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      submitted: false,
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      this.submitted = true;
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 4rem 1rem;
  text-align: center;
  background-color: #121212;
  color: #e0e0e0;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
}
h3 {
  color: #cccccc;
}
a {
  color: var(--secondary-color);
}
.contact-form {
  margin-top: 2rem;
  text-align: left;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffffff;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #1e1e1e;
  color: #e0e0e0;
}
button[type="submit"] {
  background-color: red;
  color: #121212;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin: 1rem auto 0;
  transition: background-color 0.3s ease;
}
button[type="submit"]:hover {
  background-color: #ff6666;
}
</style>
