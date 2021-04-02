<template>
  <section id="login">
    <header>
      <app-title />
      <description />
    </header>
    <main>
      <div class="main-image">
        <img alt="Reading Book" src="../assets/images/reading-book.svg" />
      </div>
      <div class="login-box">
        <div class="error-message" v-if="errorMessage">
          <p>{{ errorMessage }}</p>
        </div>
        <div class="form-box">
          <form @submit.prevent="loginWithFirebase">
            <h3>Login</h3>
            <input-field name="email" inputType="email" title="E-mail" v-model="user.email" />
            <input-field
              name="password"
              inputType="password"
              title="Senha"
              v-model="user.password"
            />
            <div class="forgot">
              <router-link to="/novaSenha">
                <p>Esqueci minha senha</p>
              </router-link>
            </div>
            <div class="button">
              <default-button typeButton="submit" title="Entrar" />
            </div>
            <div class="create-account">
              <p>Não tem conta?</p>
              <router-link to="/cadastro">
                <p>Cadastre-se</p>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </main>
  </section>
  <app-footer />
</template>

<script lang="js">
import firebase from 'firebase/app';
import Title from '@/components/Title.vue';
import Footer from '@/components/Footer.vue';
import Description from '@/components/Description.vue';
import InputField from '@/components/InputField.vue';
import DefaultButton from '@/components/DefaultButton.vue';

export default {
  components: {
    'app-title': Title,
    'app-footer': Footer,
    description: Description,
    'input-field': InputField,
    'default-button': DefaultButton,
  },
  data() {
    return {
      user: {},
      errorMessage: '',
    };
  },
  methods: {
    loginWithFirebase() {
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push({ name: 'ReadingList' });
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            this.errorMessage = 'Não existe uma conta cadastrada com este e-mail.';
          } else if (error.code === 'auth/wrong-password') {
            this.errorMessage = 'A senha está incorreta.';
          }
          console.log(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

header {
  position: absolute;
  margin: 0px 40px;
  color: $white;
  @extend %flex-column;
}

main {
  display: flex;
  width: 100%;
  min-height: 700px;
  div.main-image,
  div.login-box {
    width: calc(100% / 2);
  }
  div.main-image {
    text-align: center;
    margin-top: 265px;
    img {
      width: 70%;
    }
  }
  div.login-box {
    .error-message {
      margin: 0 80px;
      width: 450px;
      p {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 300;
      }
    }
    @extend %flex-column;
    margin: auto;
    div.form-box {
      @extend %form-box;
      form {
        padding: 30px 80px;
      }
      h3 {
        margin: 0 0 20px 0;
        font-family: $title-font;
        font-size: 3rem;
        text-align: center;
        color: $white;
      }
      div.button {
        text-align: center;
        margin-top: 30px;
      }
      div.forgot {
        width: max-content;
        a {
          text-decoration: underline;
          color: $white;
        }
        p {
          margin: 0;
          color: $white;
          font-size: 0.9rem;
          font-weight: 300;
        }
      }
      div.create-account {
        p {
          margin: 0 0 10px 0;
          font-size: 1rem;
          font-weight: 300;
        }
        a {
          color: $soft-pink;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
