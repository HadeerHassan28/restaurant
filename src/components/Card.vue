<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { fetchData } from "../lib/home";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  isSmallScreen: null,
});
const resturant = ref([]);

const handleDelate = async (id) => {
  //console.log(id);
  try {
    let result = await axios.delete(`http://localhost:3000/resturant/${id}`);
    console.log("Deleted:", result);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  try {
    const result = await fetchData();
    //console.log(result);
    resturant.value = result;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="card p-3 m-3" :class="{ 'sm-width': isSmallScreen }">
    <img :src="item.img" class="card-img-top imgCard" alt="resturant img" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">Contact: {{ item.contact }}</p>
      <p class="card-text">Branches: {{ item.branches }}</p>
      <div class="d-flex gap-2">
        <router-link :to="'update/' + props.item.id" class="btn bttn"
          >Update</router-link
        >
        <button class="btn btnDelate" @click="handleDelate(item.id)">
          Delate
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  height: 90% !important;
}
.imgCard {
  height: 100%;
}
.btnDelate {
  background-color: var(--errorText) !important;
  color: var(--primary) !important;
  font-weight: bold !important;
}
.btnDelate:hover {
  background-color: var(--primary) !important;
  color: var(--errorText) !important;
  border: 1px solid var(--errorText) !important;
}
</style>
