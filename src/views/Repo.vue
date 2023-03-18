<script setup>
import axios from "axios";
import { ref } from "vue";
import naxCard from "nax-card";

let repos = ref([]);
let isLoading = ref(true);

const getRepos = async () => {
  try {
    const res = await axios.get(
      "https://api.github.com/users/williamwebs/repos"
    );
    repos = res.data;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};
getRepos();

const consoleParams = () => {
  console.log(params);
};
</script>

<template>
  <section class="project">
    <!-- <h1>Repo</h1> -->
    <div style="margin: auto; margin-bottom: 60px">
      <div v-if="isLoading" class="container__true">
        <naxCard class="card" v-for="repo in 6" />
      </div>
      <div v-else class="container__false">
        <router-link
          class="repo__list"
          v-for="repo in repos"
          :key="repo.id"
          :to="`/repo/${repo.name}`"
        >
          <h2>{{ repo.name }}</h2>
          <small>{{ repo.visibility }}</small>

          <p class="desc__">
            {{
              repo.description
                ? repo.description.length > 50
                  ? repo.description.slice(0, 50) + "..."
                  : repo.description
                : "No description added"
            }}
          </p>
          <p class="lang__">
            {{ repo.language ? repo.language : "No language set" }}
          </p>
          <div class="base__">
            <p>
              <small>
                {{ new Date(repo.updated_at).toDateString() }}
              </small>
            </p>
            <p>
              <small> forks: {{ repo.forks }} </small>
            </p>
            <p>
              <small>stars: {{ repo.stargazers_count }}</small>
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 3px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.project {
  height: 85vh;
  overflow-y: scroll;
  .container__true {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;

    .card {
      margin: 0;
      padding: 0;
      overflow: hidden;
      animation: dim 1s linear infinite;
    }
  }

  .container__false {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .repo__list {
      padding: 1.2rem;
      border: 1px solid transparent;
      border-radius: 0.5rem;
      background: #fff;
      color: #242424;
      width: 300px;
      aspect-ratio: 1/1;
      position: relative;
      overflow: hidden;

      transition: all 0.5s;

      &:hover {
        transform: scale(1.07);
      }

      .desc__ {
        margin: 1.5rem 0 0.5rem;
        font-size: 0.8rem;
        text-align: left;
      }

      .lang__ {
        text-align: right;
      }

      .base__ {
        background-color: #ddd;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.3rem 0;
      }
    }
  }
}

@keyframes dim {
  0% {
    opacity: 0;
  }
}
</style>
