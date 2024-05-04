<script>
export default {
  name: "Home",
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
