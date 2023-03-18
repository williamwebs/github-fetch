<script setup>
const name = "th_ejouRney.xyz";
</script>

<template>
  <section class="home">
    <h1>{{ name }}</h1>
    <div class="img__wrapper">
      <img src="../assets/image.jpg" class="hero__img" alt="" />
    </div>
    <p>
      I am a Frontend Developer with a passion for developing user-centric,
      aesthetically appealing web solutions with ReactJs and VueJs.
    </p>
    <router-link to="repo" class="btn">check my repos</router-link>
  </section>
</template>

<style lang="scss" scoped>
.home {
  font-family: var(--poppins);
  height: 85vh;
  text-align: center;
  .img__wrapper {
    width: 400px;
    height: 350px;
    overflow: hidden;
    border-radius: 20% 0 20% 0;
    margin: 0.5rem auto 1.2rem;
    .hero__img {
      width: 100%;
    }
  }
  p {
    max-width: 400px;
    width: 100%;
    text-align: justify;
    margin: 0 auto;
  }
  .btn {
    border: 1px solid white;
    padding: 0.6rem 1.2rem;
    margin: 1.5rem auto 0;
    display: block;
    width: fit-content;
    color: #fff;
    transition: all 0.5s;
    &:hover {
      background: #fff;
      color: #242424;
    }
  }
}
</style>
