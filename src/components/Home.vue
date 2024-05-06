<script>
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) this.$router.push({ name: "SignUp" });
  },
};
</script>

<template>
  <h1>Home page</h1>
</template>

<style></style>
