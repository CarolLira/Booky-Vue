<template>
  <section id="addBook">
    <app-header />
    <main>
      <div class="form-box">
        <form>
          <h3>Adicionar Novo Livro</h3>
          <div class="new-book">
            <div class="book-image">
              <img class="cover" v-if="newBook.img" :src="newBook.img" />
              <img class="default" v-else src="../assets/images/img-empty.svg" />
            </div>
            <div class="book-info">
              <input-field
                name="title-addBook"
                title="Título"
                v-model="newBook.nome"
                height="50px"
              ></input-field>
              <input-field
                name="author-addBook"
                title="Autor"
                v-model="newBook.autor"
                height="50px"
              ></input-field>
              <input-field
                name="image-addBook"
                title="URL da Imagem"
                v-model="newBook.img"
                height="50px"
              ></input-field>
            </div>
          </div>
          <default-button typeButton="submit" title="Confirmar" />
        </form>
      </div>
    </main>
    <app-footer />
  </section>
</template>

<script lang="js">
import firebase from 'firebase/app';
import Footer from '@/components/Footer.vue';
import InputField from '@/components/InputField.vue';
import DefaultButton from '@/components/DefaultButton.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    'app-footer': Footer,
    'input-field': InputField,
    'default-button': DefaultButton,
    'app-header': Header,
  },
  data() {
    return {
      newBook: {
        nome: '',
        img: '',
        autor: '',
      },
    };
  },
  methods: {
  },
  beforeMount() {
    const user = firebase.auth().currentUser;
    if (!user) {
      this.$router.push({ name: 'Login' });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

#addBook {
  main {
    display: flex;
    justify-content: center;
    min-height: 600px;
    .form-box {
      @extend %form-box;
      width: 680px;
      margin: auto;
      h3 {
        margin: 0 0 20px 0;
        font-family: $title-font;
        font-size: 2.6rem;
        text-align: center;
        color: $white;
      }
      form {
        padding: 40px 80px;
        .new-book {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          .book-image {
            width: 126px;
            height: 172px;
            display: flex;
            border: 4px solid #3f3d56;
            border-radius: 2px;
            justify-content: center;
            img.cover {
              object-fit: fill;
              width: 100%;
              height: 100%;
            }
            img.default {
              width: 40px;
            }
          }
          .book-info {
            width: calc(100% - 150px);
          }
        }
      }
    }
    .main-image {
      position: absolute;
      top: 22%;
      left: 50%;
    }
  }
}
</style>
