<script>
export default {
  name: "Header",
};
</script>

<template>
  <div class="nav">
    <!-- logo -->
    <img src="../assets/header.png" class="img" />

    <!-- menu -->
    <div class="navText">
      <a>Home</a>
      <a>Add Restaurant</a>
      <a>Update Restaurant</a>
    </div>

    <!-- Logout -->
    <a class="logout">Logout</a>
  </div>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: var(--sec);
  color: var(--primary);
  padding-top: 5px;
  padding-bottom: 5px;
  overflow: hidden;
}

.img {
  width: 50px;
  height: auto;
}

.navText a {
  margin-right: 20px;
  text-decoration: none;
}
.navText a:hover {
  color: var(--logo);
}
</style>
