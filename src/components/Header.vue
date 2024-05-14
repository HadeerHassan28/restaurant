<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const user = ref(null);
const userName = ref(null);

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
  userName.value = JSON.parse(user.value).name;

  //console.log(userName.value);
});
//console.log(user.value);
</script>

<template>
  <div class="nav">
    <!-- logo -->
    <img src="../assets/header.png" class="img" />

    <!-- menu -->
    <div class="navText" v-if="user">
      <router-link to="/" class="text">Home</router-link>
      <router-link to="add" class="text">Add Restaurant</router-link>
      <router-link to="update" class="text">Update Restaurant</router-link>
    </div>

    <div class="rightSide d-flex flex-row">
      <!-- name -->
      <div class="d-flex gap-2 align-items-center">
        <font-awesome-icon
          icon="fa-solid fa-user"
          class="icon"
          size="sm"
          v-if="userName"
        />
        <a v-if="userName" class="name">{{ userName }}</a>
      </div>

      <!-- Logout -->
      <a @click="logout" v-if="user" class="name">Logout</a>
      <a @click="signup" v-else class="name">SignUp</a>
    </div>
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

.navText .text,
.name {
  margin-right: 20px;
  text-decoration: none;
  color: var(--primary);
}

.navText .text:hover,
.nav .rightSide a:hover {
  color: var(--logo);
}
.navText .text:before,
.nav .rightSide a:before {
  color: var(--primary);
}
</style>
