<script setup>
import { ref } from 'vue'

const visible = ref(false);

const closeSidebar = () => {
  visible.value = false;
};
</script>

<template>
  <pv-toolbar class="custom-toolbar">
    <template #start>
      <pv-icon-field iconPosition="left">
        <pv-button icon="pi pi-align-justify" @click="visible = true" class="open-button"/>
      </pv-icon-field>
    </template>
  </pv-toolbar>

  <div class="card flex justify-content-center custom-sidebar">
    <pv-sidebar v-model:visible="visible" style="background-color: #10B981">
      <template #container="{ closeCallback }" >
        <div class="sidebar-content">
          <div class="sidebar-header">
            <span>
              <pv-button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="close-button">
              </pv-button>
            </span>
          </div>

          <div class="sidebar-navigation">
            <router-link to="/friends" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">group</span>
              <span class="text">Friends</span>
            </router-link>
            <router-link to="/posts" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">post_add</span>
              <span class="text">Posts</span>
            </router-link>
            <router-link to="/publications" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">library_books</span>
              <span class="text">Publications</span>
            </router-link>
            <router-link to="/users" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">person</span>
              <span class="text">My Profile</span>
            </router-link>
          </div>

          <div class="other-options">
            <router-link to="/account" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">keyboard_return</span>
              <span class="text">Return</span>
            </router-link>
          </div>
        </div>
      </template>
    </pv-sidebar>
  </div>
</template>

<style scoped>
.custom-toolbar{
  background-color: #10B981;
  position: fixed;
  width: 100vw;
  z-index: 1000;
}
.sidebar-header{
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem 0  1.5rem;
  display: flex;
  margin-bottom: 3vh;
}

.sidebar-content{
  display: flex;
  flex-direction: column;
  height: 100%;
}


.material-icons {
  font-size: 2rem;
  color: var(--primary-color-text);
  transition: 0.2s ease-in-out;
  margin-right: 1rem;
}

.open-button {
  font-size: 2rem;
  transition: 0.2s ease-in-out;
  color: var(--primary-color-text);
  margin-right: 1rem;
}

.close-button{
  height: 2rem;
  width: 2rem;
  transition: 0.2s ease-in-out;
  background-color: white;
  margin-left: 2rem;
}

.sidebar-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 1rem 1rem;
}

.sidebar-button:hover {
  background-color: var(--primary-600);
}

.text {
  transition: 0.2s ease-in-out;
  min-height: 2rem;
  display: flex;
  color: var(--primary-color-text);
}

.other-options {
  margin-top: auto;
}
</style>
