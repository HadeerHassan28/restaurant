<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const resturantItem = ref({
  name: "",
  branches: "",
  img: "",
  contact: "",
});
const id = ref(null);
const router = useRouter();
const route = useRoute();

const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    let result = await axios.put(
      `http://localhost:3000/resturant/${id.value}`,
      {
        name: resturantItem.value.name,
        branches: resturantItem.value.branches,
        img: resturantItem.value.img,
        contact: resturantItem.value.contact,
      }
    );
    // console.log(result);
    router.push({ name: "Home" });
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  let user = localStorage.getItem("user-info");
  if (!user) router.push({ name: "SignUp" });

  id.value = route.params.id;
  try {
    let result = await axios
      .get(`http://localhost:3000/resturant/${id.value}`)
      .then((item) => (resturantItem.value = item.data));
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="container">
    <h1 class="title">Update Data</h1>
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
          v-model="resturantItem.name"
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
          v-model="resturantItem.branches"
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
          v-model="resturantItem.contact"
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
        />
      </div>
      <button type="submit" class="btn bttn w-100" @click="handleUpdate">
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
