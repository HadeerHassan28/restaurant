<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      id: uuidv4(),
    };
  },
  methods: {
    async signUp() {
      let result = await axios
        .post("http://localhost:3000/user", {
          email: this.email,
          password: this.password,
          name: this.name,
        })
        .then((res) => {
          localStorage.setItem("user-info", JSON.stringify(res.data));
          this.$router.push({ name: "Login" });
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
  <div class="container">
    <img src="../assets/logo1.png" class="logo" alt="Logo" />
    <h1>Sign Up</h1>

    <div class="container-form">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter E-mail" />
      <input type="password" v-model="password" placeholder="Enter Password" />

      <button type="submit" v-on:click="signUp">Sign Up</button>

      <p>
        <router-link to="/login" class="router-link">Login</router-link>
      </p>
    </div>
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
  padding: 10px;
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
</style>
