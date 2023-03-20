<script setup>
let openMenu = true;

const handleMenu = () => {
  openMenu = !openMenu;
  console.log(openMenu);
};
</script>

<template>
  <div class="container">
    <nav id="nav">
      <router-link class="logo" to="/">WA</router-link>
      <div class="menu__bar" @click="handleMenu">Menu_</div>
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

        <span @click="handleMenu">close_</span>
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

    // .show {
    //   display: block;
    // }

    // .hide {
    //   display: none;
    // }

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

@media (max-width: 600px) {
  .container {
    width: 90%;

    #nav {
      padding: 1rem 0;
      .logo,
      .menu__bar {
        font-size: 2rem;
      }

      .menu__container {
        padding: 0rem;
        span {
          top: 1.5rem;
          right: 1.8rem;
          font-size: 1.2rem;
        }

        ul {
          li {
            font-size: 1.5rem;
            margin: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
