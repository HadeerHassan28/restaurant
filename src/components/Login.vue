<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const login = async () => {
  errMsg.value = "";
  try {
    let result = await axios.get(
      `http://localhost:3000/user?email=${email.value}&password=${password.value}`
    );
    const userData = result.data[0];
    console.log(result.data[0]);
    if (userData) {
      localStorage.setItem("user-info", JSON.stringify(result.data[0]));
      router.push({ name: "Home" });
    } else errMsg.value = "Invalid email or password";
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  let user = localStorage.getItem("user-info");
  //console.log(user);
  if (user) router.push({ name: "Home" });
});
</script>

<template>
  <div class="container">
    <img src="../assets/logo1.png" class="logo" alt="Logo" />
    <h1 class="title">Login</h1>

    <div class="container-form">
      <input type="text" v-model="email" placeholder="Enter E-mail" />

      <input type="password" v-model="password" placeholder="Enter Password" />

      <button type="submit" v-on:click="login">Login</button>

      <p>
        <router-link to="/signup" class="router-link">Sign Up</router-link>
      </p>
    </div>
    <div v-if="errMsg" class="errorMsg">{{ errMsg }}</div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.logo {
  width: 100px;
}

.container-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container-form input {
  width: 200%;
  border: 1px solid var(--logo);
  border-radius: 10px;
}
.container-form button {
  padding: 20px;
  border-radius: 30px;
  width: 200%;
  border: 1px solid var(--logo);
  background: var(--logo);
  color: var(--primary);
  font-weight: bolder;
  font-size: 16px;
}
.container-form button:hover {
  border: 1px solid var(--logo);
  background: var(--primary);
  color: var(--logo);
}

.container-form p {
  color: var(--logo);
  font-size: 18px;
  font-weight: bolder;
  text-decoration: none;
}
.container-form p .router-link {
  color: var(--logo);
  text-decoration: none;
  font-weight: bold;
}

.container-form p .router-link:hover {
  color: var(--sec);
}

.errorMsg {
  border: 1px solid var(--errorText);
  color: var(--errorText);
  background: var(--errorBg);
  text-align: center;
  padding: 30px;
  border-radius: 30px;
}
</style>
