<script setup>
import { ref } from "vue";
import axios from "axios";
let isLoading = ref(true);
let data = {};
let id = `$route.params.id`


const fetchRepo = async () => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/williamwebs/repos/${$route.params.id}`
    );
    data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchRepo();
</script>

<template>
  <section class="project">
    <h1>Single Project</h1>
    <p>This is the single project page</p>
  </section>
</template>

<style></style>
