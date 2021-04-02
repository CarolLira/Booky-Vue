<template>
  <router-link class="linkButton" :to="path">{{ title }}</router-link>
</template>

<script lang="js">
export default {
  props: ['path', 'title'],
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

.linkButton {
  @extend %button-default;
  &:hover {
    background: $purple;
    @extend %button-scale;
  }
}
</style>
