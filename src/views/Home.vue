<template>
  <section id="home">
    <header>
      <app-title />
      <description />
    </header>
    <main>
      <div class="main-buttons">
        <link-button path="/login" title="Entrar"></link-button>
        <link-button path="/cadastro" title="Criar Conta"></link-button>
      </div>
      <div class="main-image">
        <img alt="Bookshelf" src="../assets/images/bookshelf.svg" />
      </div>
    </main>
    <app-footer />
  </section>
</template>

<script lang="js">
// @ is an alias to /src
import Title from '@/components/Title.vue';
import Footer from '@/components/Footer.vue';
import LinkButton from '@/components/LinkButton.vue';
import Description from '@/components/Description.vue';

export default {
  name: 'Home',
  components: {
    'app-title': Title,
    'app-footer': Footer,
    'link-button': LinkButton,
    description: Description,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

a {
  text-decoration: none;
}

section#home {
  @extend %flex-column;
}

header {
  margin: 0px 40px;
  color: $white;
  @extend %flex-column;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 524px;
  div {
    @extend %flex-column;
    text-align: center;
    align-items: center;
  }
  div.main-buttons {
    width: calc(100% / 2.2);
  }
  div.main-image {
    width: calc(100% / 2);
    img {
      width: 83%;
    }
  }
}
</style>
