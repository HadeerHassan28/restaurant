<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const resturant = ref({
  name: "",
  branches: "",
  img: "",
  contact: "",
  id: uuidv4(),
});
const router = useRouter();

const handleAdd = async (e) => {
  e.preventDefault();
  try {
    let result = await axios.post("http://localhost:3000/resturant", {
      name: resturant.value.name,
      branches: resturant.value.branches,
      img: resturant.value.img,
      contact: resturant.value.contact,
    });
    //console.log(result);
    router.push({ name: "Home" });
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  let user = localStorage.getItem("user-info");
  if (!user) router.push({ name: "SignUp" });
});
</script>

<template>
  <div class="container">
    <h1 class="title">Please Enter the Resturant data</h1>
    <form class="w-75">
      <div class="mb-3">
        <!-- name -->
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="name"
          v-model="resturant.name"
        />
      </div>
      <!-- branches -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Branches</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          name="branches"
          v-model="resturant.branches"
        />
      </div>
      <!-- contact -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contact</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          name="contact"
          v-model="resturant.contact"
        />
      </div>

      <!-- img -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Image</label>
        <input
          type="url"
          class="form-control"
          id="exampleInputPassword1"
          name="img"
          v-model="resturant.img"
        />
      </div>
      <button type="submit" class="btn bttn w-100" @click="handleAdd">
        Submit
      </button>
    </form>
  </div>
</template>

<style>
.bttn {
  background-color: var(--logo) !important;
  color: var(--primary) !important;
  font-weight: bold !important;
  font-size: 1rem !important;
}
.bttn:hover {
  background-color: var(--primary) !important;
  color: var(--logo) !important;
  border: 1px solid var(--logo) !important;
}
</style>
