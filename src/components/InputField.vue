<template>
  <div class="field" :style="`height: ${height}`">
    <label :for="name">{{ title }}</label>
    <input
      :id="name"
      :type="inputType || 'text'"
      :placeholder="title"
      v-model="value"
    />
  </div>
</template>

<script lang="js">
export default {
  props: ['name', 'title', 'inputType', 'modelValue', 'height'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

div.field {
  background-color: $black-input-background;
  height: 42px;
  margin-bottom: 12px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  label {
    display: none;
  }
  input#name {
    @include inputIcon("../assets/images/user-icon.svg");
  }
  input#email {
    @include inputIcon("../assets/images/email-icon.svg");
  }
  input#password,
  input#confirmPassword {
    @include inputIcon("../assets/images/lock-icon.svg");
  }
  input#title {
    @include inputIcon("../assets/images/book-cover-icon.svg");
  }
  input#author {
    @include inputIcon("../assets/images/pen-icon.svg");
  }
  input#image {
    @include inputIcon("../assets/images/img-icon.svg");
  }
  input#title-addBook {
    @include inputIcon-AddBook("../assets/images/book-cover-icon.svg");
  }
  input#author-addBook {
    @include inputIcon-AddBook("../assets/images/pen-icon.svg");
  }
  input#image-addBook {
    @include inputIcon-AddBook("../assets/images/img-icon.svg");
  }
  input {
    color: $gray;
    width: 98%;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    padding-left: 40px;
    font-weight: 400;
    font-family: $text-font;
    &::placeholder {
      color: $gray-input-placeholder;
      font-family: $text-font;
      font-weight: 400;
    }
  }
}
</style>
