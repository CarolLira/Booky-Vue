<template>
  <div class="title" :class="extraClass">
    <router-link to="/">
      <h1>B<span class="colorful-letter">o</span>oky</h1>
    </router-link>
    <img class="logo" alt="logo" src="../assets/images/book-icon.svg" />
  </div>
</template>

<script lang="js">
export default {
  props: ['extraClass'],
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

.colorful-letter {
  color: $light-purple;
}

div.title {
  display: flex;
  h1 {
    font-family: $title-font;
    font-size: 5rem;
    margin: 16px 0px;
    color: $white;
  }
  .logo {
    width: 80px;
    margin-left: 30px;
    height: 148px;
  }
}

div.title.header {
  h1 {
    font-size: 2.5rem;
  }
  .logo {
    width: 40px;
    margin-left: 15px;
    height: 90px;
  }
}

div.title.footer {
  h1 {
    font-size: 1rem;
    margin: 10px 0;
    font-weight: 500;
  }
  .logo {
    display: none;
  }
}
</style>
