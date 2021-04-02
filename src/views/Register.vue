<template>
  <section id="register">
    <header>
      <app-title />
      <description />
    </header>
    <main>
      <div class="main-image">
        <img alt="Reading Book" src="../assets/images/reading-book2.svg" />
      </div>
      <div class="register-box">
        <div class="error-message" v-if="errorMessage">
          <p>{{ errorMessage }}</p>
        </div>
        <div class="form-box">
          <form @submit.prevent="createUserWithFirebase">
            <h3>Cadastro</h3>
            <input-field name="name" inputType="text" title="Nome" v-model="user.name" />
            <input-field name="email" inputType="email" title="E-mail" v-model="user.email" />
            <input-field
              name="password"
              inputType="password"
              title="Senha"
              v-model="user.password"
            />
            <input-field
              name="confirmPassword"
              inputType="password"
              title="Confirme sua senha"
              v-model="user.confirmPassword"
            />
            <div class="button">
              <default-button typeButton="submit" title="Cadastrar" />
            </div>
            <div class="enter-account">
              <p>Já tem uma conta?</p>
              <router-link to="/login">
                <p>Entre</p>
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
import 'firebase/auth';
import Title from '@/components/Title.vue';
import Footer from '@/components/Footer.vue';
import Description from '@/components/Description.vue';
import InputField from '@/components/InputField.vue';
import DefaultButton from '@/components/DefaultButton.vue';

export default {
  name: 'Home',
  components: {
    'app-title': Title,
    'app-footer': Footer,
    description: Description,
    'input-field': InputField,
    'default-button': DefaultButton,
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    createUserWithFirebase() {
      if (this.password === this.confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            // eslint-disable-next-line no-alert
            alert('Novo usuário cadastrado');
            this.$router.push({ name: 'Login' });
          })
          .catch((error) => {
            if (error.code === 'auth/weak-password') {
              this.errorMessage = 'A senha precisa ter mais de 6 caracteres.';
            }
            console.log(error.message);
          });
      } else {
        this.errorMessage = 'Campos de senha estão diferentes.';
      }
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
  div.register-box {
    width: calc(100% / 2);
  }
  div.main-image {
    text-align: center;
    margin-top: 265px;
    img {
      width: 83%;
    }
  }
  div.register-box {
    @extend %flex-column;
    margin: auto;
    .error-message {
      margin: 0 80px;
      width: 450px;
      p {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 300;
      }
    }
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
      div.enter-account {
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
