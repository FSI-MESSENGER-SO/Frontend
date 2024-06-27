<script>
import { post } from "@/helpers/user.service.js";

export default {
  name: 'register',
  data() {
    return {
      user_name: '',
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      const newUser = {
        first_name: this.first_name,
        last_name: this.last_name,
        user_name: this.user_name,
        email: this.email,
        password: this.password
      };
      post(newUser)
          .then(() => {
            alert("You have successfully registered");
            this.$router.push('sign-in');
          })
          .catch(error => {
            alert("An error occurred during registration: " + error.message);
          });
    }
  }
}
</script>

<template>
  <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="flex flex-column align-items-center justify-content-center">
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
        <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
          <div class="text-center mb-5">
            <div class="text-900 text-3xl font-medium mb-3">Register</div>
          </div>

          <div>
            <label for="user_name" class="block text-900 text-xl font-medium mb-2">User Name</label>
            <pv-input-text id="user_name" type="text" placeholder="User Name" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="this.user_name" />

            <label for="first_name" class="block text-900 text-xl font-medium mb-2">First Name</label>
            <pv-input-text id="first_name" type="first_name" placeholder="First Name" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="this.first_name" />

            <label for="last_name" class="block text-900 text-xl font-medium mb-2">Last Name</label>
            <pv-input-text id="last_name" type="last_name" placeholder="Last Name" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="this.last_name" />

            <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
            <pv-input-text id="email" type="email" placeholder="Email" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="this.email" />

            <label for="password" class="block text-900 text-xl font-medium mb-2">Password</label>
            <pv-input-text id="password" type="password" placeholder="Password" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="this.password"/>

            <pv-button label="Sign Up" class="w-full p-3 text-xl" @click="register"></pv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
