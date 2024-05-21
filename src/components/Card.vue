<script setup>
import { defineProps, defineEmits } from "vue";
import axios from "axios";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  isSmallScreen: null,
});

const emit = defineEmits(["delete"]);

const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:3000/resturant/${props.item.id}`);
    emit("delete", props.item.id);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="card p-3 m-3" :class="{ 'sm-width': isSmallScreen }">
    <img :src="item.img" class="card-img-top imgCard" alt="restaurant img" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">Contact: {{ item.contact }}</p>
      <p class="card-text">Branches: {{ item.branches }}</p>
      <div class="d-flex gap-2">
        <router-link :to="'update/' + item.id" class="btn bttn"
          >Update</router-link
        >
        <button class="btn btnDelete" @click="handleDelete">Delete</button>
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
.btnDelete {
  background-color: var(--errorText) !important;
  color: var(--primary) !important;
  font-weight: bold !important;
}
.btnDelete:hover {
  background-color: var(--primary) !important;
  color: var(--errorText) !important;
  border: 1px solid var(--errorText) !important;
}
</style>
