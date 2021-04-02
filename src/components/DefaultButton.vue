<template>
  <button
    :style="`background: ${color}`"
    :type="typeButton"
    @click="$emit('buttonAction', $event)"
  >
    {{ title }}
  </button>
</template>

<script lang="js">
export default {
  props: ['typeButton', 'title', 'color'],
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

button {
  @extend %button-default;
  width: 100%;
  font-size: 1.1rem;
}
</style>
