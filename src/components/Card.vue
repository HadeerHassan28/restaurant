<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  isSmallScreen: null,
});
</script>

<template>
  <div class="card p-3 m-3" :class="{ 'sm-width': isSmallScreen }">
    <img :src="item.img" class="card-img-top imgCard" alt="resturant img" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">Contact: {{ item.contact }}</p>
      <p class="card-text">Branches: {{ item.branches }}</p>
      <router-link to="update" class="btn btn-primary">Update</router-link>
    </div>
  </div>
</template>

<style>
.card {
  height: 90%;
}
.imgCard {
  height: 100%;
}
</style>
