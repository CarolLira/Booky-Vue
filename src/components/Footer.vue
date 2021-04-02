<template>
  <footer>
    <app-title extraClass="footer"></app-title>
    <p>© 2021</p>
  </footer>
</template>

<script lang="js" scoped>
import Title from './Title.vue';

export default {
  components: {
    'app-title': Title,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

footer {
  display: flex;
  justify-content: center;
  border-top: 2px solid #3f3d56;
  width: 100%;
  p {
    margin: 12px 0px 0px 8px;
    font-size: 1rem;
  }
}
</style>
