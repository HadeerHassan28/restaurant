<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Card from "./Card.vue";
import { fetchData } from "../lib/home";
const name = ref(null);
const resturant = ref([]);
const isSmallScreen = window.innerWidth < 768;

onMounted(async () => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name;
  if (!user) this.$router.push({ name: "SignUp" });

  //Get from API
  try {
    const result = await fetchData();
    //console.log(result);
    // let result = await axios.get("http://localhost:3000/resturant");
    resturant.value = result;
  } catch (error) {
    console.log(error);
  }

  //console.log(resturant.value);
});
</script>

<template>
  <div class="container">
    <h1 class="title">Welcome to Our Restaurants</h1>
    <div class="row d-flex justify-content-center mb-5">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="item in resturant"
        :key="item.id"
      >
        <!-- cards  -->
        <Card :item="item" :isSmallScreen="isSmallScreen" />
      </div>
    </div>
  </div>
</template>

<style>
.title {
  color: var(--title);
}
.sm-width {
  width: 90%;
}

@media (min-width: 768px) {
  .md-lg-width {
    width: 100%;
  }
}
</style>
