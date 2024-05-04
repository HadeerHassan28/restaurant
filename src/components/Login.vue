<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios
        .get(
          `http://localhost:3000/user?email=${this.email}&password=${this.password}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            localStorage.setItem("user-info", JSON.stringify(res.data[0]));
            this.$router.push({ name: "Home" });
          }
        })

        .catch((error) => console.log(error));
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    //console.log(user);
    if (user) this.$router.push({ name: "Home" });
  },
};
</script>

<template>
  <img src="../assets/logo1.png" class="logo" alt="Logo" />
  <h1>Login</h1>

  <div class="container">
    <input type="text" v-model="email" placeholder="Enter E-mail" />
    <input type="password" v-model="password" placeholder="Enter Password" />

    <button type="submit" v-on:click="login">Login</button>

    <p>
      <router-link to="/signup" class="router-link">Sign Up</router-link>
    </p>
  </div>
</template>

<style>
.logo {
  width: 100px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container input {
  padding: 10px;
  width: 50%;
  border: 1px solid var(--logo);
  border-radius: 10px;
}
.container button {
  padding: 20px;
  border-radius: 30px;
  width: 50%;
  border: 1px solid var(--logo);
  background: var(--logo);
  color: var(--primary);
  font-weight: bolder;
  font-size: 16px;
}
.container button:hover {
  border: 1px solid var(--logo);
  background: var(--primary);
  color: var(--logo);
}

.container p {
  color: var(--logo);
  font-size: 18px;
  font-weight: bolder;
  text-decoration: none;
}
.container p .router-link {
  color: var(--logo);
  text-decoration: none;
  font-weight: bold;
}

.container p .router-link:hover {
  color: var(--sec);
}
</style>
