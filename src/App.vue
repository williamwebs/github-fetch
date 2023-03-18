<script setup>
let openMenu = false;
</script>

<template>
  <div class="container">
    <nav id="nav">
      <router-link class="logo" to="/">WA</router-link>
      <div class="menu__bar" @click="openMenu = !openMenu">Menu_</div>
      <div class="menu__container" v-if="openMenu">
        <div class="menus">
          <ul>
            <li>
              <router-link class="router__link" to="/">01. Home</router-link>
            </li>
            <li>
              <router-link class="router__link" to="/repo"
                >02. View Repository</router-link
              >
            </li>
          </ul>
          <!-- social links -->
          <div class="socials">social links</div>
        </div>

        <span @click="openMenu = !openMenu">close_</span>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
body {
  position: relative;
}
.container {
  width: 80%;
  margin: 0 auto;
  // position: relative;
}
#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--oleo);

  .menu__bar {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #777;
    }
  }

  .menu__container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // left: -2000px;
    text-align: center;
    padding: 2rem;
    background-color: #242424;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      position: absolute;
      top: 2rem;
      right: 4rem;
      font-size: 3rem;
      padding: 0 1rem;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background-color: #fff;
        color: #242424;
      }
    }
    ul {
      li {
        font-size: 3rem;
        margin: 1.2rem;
        .router__link {
          color: #fff;
          transition: all 0.5s;
          &:hover {
            color: #777;
          }
        }
      }
    }
  }

  .logo {
    font-size: 3rem;
  }

  .menu__bar {
    font-size: 3rem;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
