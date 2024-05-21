<script setup>
import { ref, onMounted } from "vue";
import Card from "./Card.vue";
import { fetchData } from "../lib/home";

const resturant = ref([]);
const isSmallScreen = window.innerWidth < 768;

const loadRestaurants = async () => {
  try {
    resturant.value = await fetchData();
  } catch (error) {
    console.error(error);
  }
};

const handleDelete = async () => {
  await loadRestaurants(); // Reload data after an item is deleted
};

onMounted(() => {
  loadRestaurants();
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
        <Card
          :item="item"
          :isSmallScreen="isSmallScreen"
          @delete="handleDelete"
        />
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
