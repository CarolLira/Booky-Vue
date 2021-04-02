<template>
  <section id="readingList">
    <app-header />
    <main class="list" v-if="books.length">
      <div class="books-list">
        <book-card
          @editBookAction="editBook($event)"
          v-for="book in books"
          v-bind:key="book.id"
          :photo="book.img"
          :id="book.id"
        ></book-card>
      </div>
      <div class="overlay-form">
        <div class="form-box">
          <img @click="closeForm()" class="close-form" src="../assets/images/close.svg" />
          <form @submit.prevent>
            <h3>Editar Informações</h3>
            <div class="edit-book" :data-id="details.id">
              <div class="book-image">
                <img class="cover" v-if="details.img" :src="details.img" />
                <img class="default" v-else src="../assets/images/img-empty.svg" />
              </div>
              <div class="book-info">
                <input-field name="title" title="Título" v-model="details.name"></input-field>
                <input-field name="author" title="Autor" v-model="details.author"></input-field>
                <input-field name="image" title="URL da Imagem" v-model="details.img"></input-field>
              </div>
            </div>
            <div class="button-actions">
              <default-button
                typeButton="submit"
                title="Confirmar"
                @buttonAction="updateBook($event)"
              />
              <default-button
                color="#565656f2"
                typeButton="button"
                title="Excluir"
                @buttonAction="deleteBook($event)"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
    <main class="list-empty" v-else>
      <img src="../assets/images/no-data.svg" />
    </main>
    <app-footer />
  </section>
</template>

<script lang="js">
import firebase from 'firebase/app';
import Footer from '@/components/Footer.vue';
import BookCard from '@/components/BookCard.vue';
import InputField from '@/components/InputField.vue';
import DefaultButton from '@/components/DefaultButton.vue';
import Header from '@/components/Header.vue';
import MixinMethods from '@/mixins/mixins';

export default {
  components: {
    'app-footer': Footer,
    'book-card': BookCard,
    'input-field': InputField,
    'default-button': DefaultButton,
    'app-header': Header,
  },
  data() {
    return {
      books: [],
      details: {
        id: '',
        name: '',
        img: '',
        author: '',
      },
    };
  },
  mixins: [MixinMethods],
  methods: {
    editBook(event) {
      const bookId = event.currentTarget.getAttribute('data-id');
      fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.details = data;
          const form = document.querySelector('.overlay-form');
          form.style.display = 'block';
        })
        .catch((err) => console.log(err));
    },
    closeForm() {
      const form = document.querySelector('.overlay-form');
      form.style.display = 'none';
      this.details = {
        id: '',
        name: '',
        img: '',
        author: '',
      };
    },
    updateBook(event) {
      const bookId = event.target.parentElement.previousSibling.getAttribute('data-id');
      const bookDetails = this.details;
      fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookDetails),
      }).catch((error) => {
        console.log(error);
      });
    },
    deleteBook(event) {
      const bookId = event.target.parentElement.previousSibling.getAttribute('data-id');
      fetch(`http://localhost:3000/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
        // eslint-disable-next-line no-alert
          alert('Livro excluído');
          const form = document.querySelector('.overlay-form');
          form.style.display = 'none';
          const booksList = this.getBooksList();
          booksList
            .then((list) => {
              this.books = list;
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    const user = firebase.auth().currentUser;
    if (!user) {
      this.$router.push({ name: 'Login' });
    }
  },
  mounted() {
    const booksList = this.getBooksList();
    booksList
      .then((list) => {
        this.books = list;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

#readingList {
  main.list {
    min-height: 600px;
    display: flex;
    .books-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 40px auto 0 auto;
    }
    .overlay-form {
      position: fixed;
      display: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background-color: rgba(33, 30, 30, 0.9);
      .form-box {
        @extend %form-box;
        width: 640px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        .close-form {
          width: 18px;
          position: absolute;
          top: 5%;
          left: 91%;
          cursor: pointer;
        }
        h3 {
          margin: 0 0 20px 0;
          font-family: $title-font;
          font-size: 2.6rem;
          text-align: center;
          color: $white;
        }
        form {
          padding: 40px 80px;
          .button-actions {
            display: flex;
            justify-content: space-between;
            button {
              width: 48%;
            }
          }
          .edit-book {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            .book-image {
              width: 108px;
              height: 147px;
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
              width: calc(100% - 132px);
            }
          }
        }
      }
    }
  }
  main.list-empty {
    display: flex;
    justify-content: center;
    min-height: 600px;
    img {
      width: 300px;
    }
  }
}
</style>
