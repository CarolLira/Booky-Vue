<template>
  <div
    @click="$emit('editBookAction', $event)"
    class="book-card"
    :class="!photo ? 'card-empty' : ''"
    :data-id="id"
  >
    <img class="cover" v-if="photo" :src="photo" />
    <img class="default" v-else src="../assets/images/img-empty.svg" />
    <div v-if="photo" class="details">
      <img src="../assets/images/loupe.svg" />
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: ['photo', 'id'],
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

.book-card {
  box-shadow: 2px 2px 15px 1px #171717;
  margin: 0% 0% 2% 7.4%;
  width: 10%;
  height: 230px;
  padding: 6px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  background-color: #3f3d56;
  img.cover {
    opacity: 1;
    transition: 0.5s ease;
    max-width: 154px;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  img.default {
    width: 40px;
  }
  .details {
    transition: 0.5s ease;
    opacity: 0;
    transform: translate(-50%, -50%);
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    color: black;
    img {
      width: 50px;
    }
  }
  &:hover {
    img.cover {
      opacity: 0.4;
    }
    .details {
      opacity: 1;
    }
  }
}
.card-empty {
  background-color: #2d2a2a;
}
</style>
