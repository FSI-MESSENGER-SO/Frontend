<script >
import {getAll} from "@/helpers/user.service.js";
import router from "@/router/index.js";

export default{
  name: 'sign_in',
  data() {
    return {
      user_name: '',
      password: '',
      userService: getAll(),
      userFinded:false,
      user: null
    }
  },
  methods: {
    singIn() {
      this.userService.then((response) => {
        response.data.forEach((user) => {
          if (user.user_name === this.user_name && user.password === this.password) {
            this.userFinded = true;
            this.user = user;
          }
        });
        this.verifySignIn();
      });
    },
    verifySignIn(){
      if(this.userFinded){
        sessionStorage.setItem("user", JSON.stringify(this.user));
        alert("You have successfully signed in");
        router.push('/publications');
      } else {
        alert("User not found");
      }
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
            <div class="text-900 text-3xl font-medium mb-3">Welcome!</div>
          </div>

          <div>
            <label for="user_name" class="block text-900 text-xl font-medium mb-2">User Name</label>
            <pv-input-text id="user_name" type="text" placeholder="User name" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="user_name" />

            <label for="password" class="block text-900 text-xl font-medium mb-2">Password</label>
            <pv-input-text id="password" type="text" placeholder="Password" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="password" />

            <div style="text-align: center">
              <h5 @click="$router.push('account/register')">Don't have a account? Create a new account</h5>
            </div>
            <pv-button severity="success" @click="singIn" label="Sign In" class="w-full p-3 text-xl"></pv-button>
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
