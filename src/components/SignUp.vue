<script>
export default {
  name: "SignUp",
};
</script>

<template>
  <img src="../assets/logo1.png" class="logo" alt="Logo" />
  <h1>Sign Up</h1>

  <div class="container">
    <!-- Name -->
    <input type="text" name="" value="" placeholder="Enter Name" />
    <input type="text" name="" value="" placeholder="Enter E-mail" />
    <input type="password" name="" value="" placeholder="Enter Password" />

    <button type="submit">Sign Up</button>
  </div>
</template>

<style>
.logo {
  width: 100px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container input {
  padding: 10px;
  width: 50%;
  border: 1px solid var(--logo);
  border-radius: 10px;
}
.container button {
  padding: 20px;
  border-radius: 30px;
  width: 50%;
  border: 1px solid var(--logo);
  background: var(--logo);
  color: var(--primary);
  font-weight: bolder;
  font-size: 16px;
}
.container button:hover {
  border: 1px solid var(--logo);
  background: var(--primary);
  color: var(--logo);
}
</style>
