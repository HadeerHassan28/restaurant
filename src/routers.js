import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/signup", component: SignUp, name: "SignUp" },
    { path: "/login", component: Login, name: "Login" },
    { path: "/add", component: Add, name: "Add" },
    { path: "/update/:id", component: Update, name: "Update" },
  ],
});

export default router;
