<script>
import {getAllPublications} from "@/helpers/publications.services.js";
import {postPublication} from "@/helpers/publications.services.js";

export default {
  name: "publication-options",
  data(){
    return {
      publicationServiceGetAllPublications: getAllPublications,
      publicationServicePostPublication: postPublication,
      message: "",
      content: {
        type: Object,
        required: true,
      },
      publication: null
    }
  },
  methods:{
    cancel(){
      this.content = null;
      this.message = "";
    },
    addPublication(){
      const formData = new FormData();
      formData.append('user_id', this.getUserId);
      formData.append('message', this.message);
      formData.append('content', this.content);
      formData.append('likes', 0);
      formData.append('dislikes', 0);

      this.publicationServicePostPublication(formData).then(() => {
        alert("Your publication is done");
      }).catch(() => {
        alert("An error occurred");
      });
    },

    handleFileChange(event) {
      this.content = event.target.files[0];
    },

  },
  computed: {
    getUserId() {
      try {
        return JSON.parse(sessionStorage.getItem('user'))._id;
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>

<template>
  <div v-if="getUserId != null">
    <h1 class=" my-8 text-center text-green-300"> Enter your post here </h1>
    <div class="p-5 flex justify-content-center">
      <div class="flex flex-column gap-4 shadow-1 p-8 border-round-xl">
        <pv-input-text v-model="message" placeholder="Message"/>
        <input type="file" id="file" @change="handleFileChange" accept=".jpg, .png, .webp">
        <div class="flex gap-3">
          <pv-button @click="addPublication()" label="Submit" severity="success"/>
          <pv-button @click="cancel()" label="Cancel" severity="danger"/>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-content-center my-8 ">
    <pv-card class="px-7 p-8 text-left">
      <template #title> <h3 class="text-red-500"> Please login to post</h3></template>
    </pv-card>
  </div>

</template>

<style scoped>

</style>
