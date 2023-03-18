<script setup>
import error from "../assets/error.png";
const message = "Oops...";
</script>

<template>
  <div class="wrapper">
    <img :src="error" alt="" />
    <p>
      <span>{{ message }}</span>  Page Not Found! Are you lost?
    </p>
    <br />
    <router-link class="button" to="/">Go back Home</router-link>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column;

  img {
    width: 350px;
    aspect-ratio: 1/1;
  }

  p {
    letter-spacing: .2rem;
    font-family: monospace;
    font-size: 1.2rem;
    span {
      font-size: 2rem;
      color: red;
    }
  }
}

.button {
  padding: 0.4rem 1rem;
  border: 1px solid #646cff;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin: 1px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fff;
    border-color: #fff;
  }
}
</style>
