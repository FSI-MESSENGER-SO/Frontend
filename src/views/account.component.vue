<script >
import Home from "@/account/pages/account.component.vue";
import Register from "@/account/pages/register.component.vue";
import Sign_in from "@/account/pages/sign_in.component.vue";
export default {
  name: "account",
  components: { Sign_in, Register, Home },
}

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
