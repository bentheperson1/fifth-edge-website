<template>
  <section class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <h3>We love hearing from you!</h3>

      <div v-if="!submitted">
        <form class="contact-form" method="POST" data-netlify="true" @submit.prevent="submitForm" netlify>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              placeholder="Your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div v-else>
        <p>Thank you for your message. We will get back to you soon!</p>
      </div>
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
