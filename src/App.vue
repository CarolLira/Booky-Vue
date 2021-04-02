<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap");
@import "./assets/styles/style";

body {
  background-color: $black;
  margin: 0;
  font-family: $text-font;
  font-size: 16px;
  color: $white;
  font-weight: 100;
  h1 {
    font-family: $title-font;
    font-weight: 100;
    font-size: 2rem;
    margin: 16px 0px;
    color: $white;
  }
  a {
    text-decoration: none;
  }
}
</style>
