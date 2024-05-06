<script setup>
import { onMounted, ref, onUpdated } from "vue";
import { useRouter } from "vue-router";

const user = ref(null);
const router = useRouter();

const signup = () => {
  router.push({ name: "SignUp" });
};

const logout = () => {
  localStorage.clear();
  user.value = null;
  router.push({ name: "Login" });
};

onMounted(() => {
  user.value = localStorage.getItem("user-info");
  // console.log(user.value);
});
// onUpdated(() => {
//   user.value = localStorage.getItem("user-info");
//   console.log(user.value);
// });
</script>

<template>
  <div class="nav">
    <!-- logo -->
    <img src="../assets/header.png" class="img" />

    <!-- menu -->
    <div class="navText" v-if="user">
      <router-link to="/" class="text">Home</router-link>
      <router-link to="/add" class="text">Add Restaurant</router-link>
      <router-link to="/update" class="text">Update Restaurant</router-link>
    </div>

    <!-- Logout -->
    <a @click="logout" v-if="user">Logout</a>
    <a @click="signup" v-else>SignUp</a>
  </div>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: var(--sec);
  color: var(--primary);
  padding-top: 5px;
  padding-bottom: 5px;
  overflow: hidden;
}

.img {
  width: 50px;
  height: auto;
}

.navText .text {
  margin-right: 20px;
  text-decoration: none;
  color: var(--primary);
}

.navText .text:hover,
.nav a:hover {
  color: var(--logo);
}
.navText .text:before,
.nav a:before {
  color: var(--primary);
}
</style>
