<script>
import {getAll} from "@/helpers/user.service.js";

export default {
  name: "users-list",
  beforeMount() {
    this.getUsers();
  },
  data () {
    return {
      users: [],
      userService : getAll()
    }
  },
  methods: {
    getUsers() {
      this.userService.then((response) => {
        this.users = response.data;
      }).catch((error) => {
        console.log(error);
      });
    },

    sendRequest(){
      alert('A friend request has been sent');
    }
  }
}
</script>

<template>
  <h1 class=" my-8 text-center text-green-300">Mutual Friends</h1>
  <div class="my-8 flex flex-wrap text-center gap-7 justify-content-center ">
    <div class="md:w-20rem" v-for="(user,index) in users" :key="index">
      <pv-card>
        <template #title> {{ user.user_name}}</template>
        <template #content>
          <div class="flex flex-column gap-3">
            <p class="m-0">
              {{user.first_name + ' ' + user.last_name}}
            </p>
            <pv-button class=" w-10rem border-0 bg-red-500 hover:bg-green-300 scalable" label="Contact me"
            @click="sendRequest"/>
          </div>
        </template>
      </pv-card>
    </div>
  </div>


</template>

<style scoped>

</style>
