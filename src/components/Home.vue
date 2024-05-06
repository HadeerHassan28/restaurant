<script setup>
import { ref, onMounted } from "vue";

const name = ref(null);

onMounted(() => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name;
  if (!user) this.$router.push({ name: "SignUp" });
});
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>

<style></style>
