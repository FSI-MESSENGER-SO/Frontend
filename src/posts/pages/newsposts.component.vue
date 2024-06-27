<script>
import {getAllPublications, updatePublication} from "@/helpers/publications.services.js";
import {ApiUrl} from '@/services/base.service.js'
export default {
  name: "recently-posts",
  data() {
    return {
      publications: [],
      publicationServiceGetAll: getAllPublications(),
      publicationsSplice: [],
      baseUrl: ApiUrl,
    }
  },
  beforeMount() {
    this.getPublications();

  },
  methods: {
    getPublications() {
      this.publicationServiceGetAll.then((response) => {
        this.publications = response.data;
        this.publicationsSplice = this.publications.splice(1, 5);
      }).catch((error) => {
        console.log(error);
      });
    },
    increaseLikes(id, publication) {
      publication.likes += 1;
      updatePublication(id, publication).then(() => {
        console.log("Likes updated");
      }).catch((error) => {
        console.log(error);
      });
    },
    decreaseLikes(id, publication) {
      publication.dislikes += 1;
      updatePublication(id, publication).then(() => {
        console.log("Likes updated");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<template>
  <h1 class=" my-8 text-center text-green-300">Recent Posts</h1>
  <div class="card-container">
    <pv-card class="centered-card" style="width: 70vw; margin-bottom: 2rem;" v-for="publication in publicationsSplice" :key="publication.id">
      <template #title>{{publication.message}}</template>
      <template #content>
        <div class="publication-image">
          <pv-image :src="this.baseUrl + '/posts/' + publication._id + '/content'" alt="Publication Image"></pv-image>
        </div>
        <p> Likes: {{ publication.likes}}</p>
        <p> Dislikes: {{ publication.dislikes}}</p>
      </template>
      <template #footer>
        <pv-button @click="increaseLikes(publication._id, publication)" class="pi pi-thumbs-up" severity="info"/>
        <pv-button @click="decreaseLikes(publication._id, publication)" class="pi pi-thumbs-down" severity="danger"/>
      </template>
    </pv-card>
  </div>

</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.centered-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.publication-image{
  max-width: 70%;
  max-height: 70%;
}
</style>
