<template>
  <section id="not-found">
    <router-link to="/">
      <img class="previous" alt="Previous Icon" src="../assets/images/previous-page-icon.svg" />
    </router-link>
    <h1 class="code">404</h1>
    <h1>Página Não Encontrada</h1>
    <main>
      <img alt="Page not found" src="../assets/images/not-found.svg" />
    </main>
    <app-footer />
  </section>
</template>

<script lang="js">
import Footer from '@/components/Footer.vue';

export default {
  components: {
    'app-footer': Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

section#not-found {
  text-align: center;
  img.previous {
    position: absolute;
    width: 46px;
    left: 40px;
    top: 40px;
  }
  h1 {
    margin: 8px 0;
    font-size: 2rem;
    font-family: $title-font;
    font-weight: 300;
  }
  h1.code {
    font-size: 3.5rem;
    color: $light-green;
  }
  main {
    img {
      width: 50%;
    }
  }
}
</style>
