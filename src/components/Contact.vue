<template>
  <section class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label>Message:</label>
          <textarea v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="btn">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Replace with your form submission logic (e.g., an API call)
      alert("Message sent!");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
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
.contact-form {
  text-align: left;
}
.form-group {
  margin-bottom: 1.5rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
}
.btn {
  background-color: var(--secondary-color);
  color: var(--background-color);
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
}
.btn:hover {
  background-color: var(--primary-color);
}
</style>
