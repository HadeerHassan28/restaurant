<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const name = ref(null);
const resturant = ref([]);
const isSmallScreen = window.innerWidth < 768;

onMounted(async () => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name;
  if (!user) this.$router.push({ name: "SignUp" });

  //Get from API
  try {
    let result = await axios.get("http://localhost:3000/resturant");
    resturant.value = result.data;
  } catch (error) {
    console.log(error);
  }

  //console.log(resturant.value);
});
</script>

<template>
  <div class="container">
    <h1 class="title">Welcome to Our Restaurants</h1>
    <div class="row d-flex justify-content-center">
      <div
        class="col-sm-6 col-md-4 col-lg-3"
        v-for="item in resturant"
        :key="item.id"
      >
        <!-- cards  -->
        <div class="card p-3 m-3" :class="{ 'sm-width': isSmallScreen }">
          <img :src="item.img" class="card-img-top" alt="resturant img" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">Contact: {{ item.contact }}</p>
            <p class="card-text">Branches: {{ item.branches }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
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
