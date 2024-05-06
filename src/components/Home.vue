<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const name = ref(null);
const resturant = ref([]);

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
    <h1>Hello {{ name }}</h1>
    <!-- data -->

    <div
      class="card"
      style="width: 18rem"
      v-for="item in resturant"
      ::key="item.id"
    >
      <img :src="item.img" class="card-img-top" alt="resturant img" />
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<style>
.container {
}
</style>
