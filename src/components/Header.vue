<template>
  <header>
    <app-title extraClass="header" />
    <div class="actions">
      <router-link to="/">
        <img class="home" alt="início" src="../assets/images/home2.svg" />
      </router-link>
      <router-link to="/adicionar">
        <img class="add-book" alt="adicionar" livro src="../assets/images/add-book2.svg" />
      </router-link>
      <router-link to="/lista">
        <img class="list" alt="lista" livro src="../assets/images/list.svg" />
      </router-link>
      <img @click="logOff()" class="logout" alt="sair" src="../assets/images/logout.svg" />
    </div>
  </header>
</template>

<script lang="js">
import firebase from 'firebase/app';
import Title from '@/components/Title.vue';

export default {
  components: {
    'app-title': Title,
  },
  methods: {
    logOff() {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Home' });
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";
header {
  padding: 4px 40px;
  color: #f2f2f2;
  box-shadow: 2px 2px 15px 1px #171717;
  flex-direction: row;
  justify-content: space-between;
  @extend %flex-column;
  .actions {
    img {
      width: 40px;
      margin: 28px 0px 0px 28px;
      cursor: pointer;
    }
    .logout {
      margin-left: 70px;
    }
  }
}
</style>
