<template>
  <section id="newPassword">
    <div class="newPassword-box">
      <div class="error-message" v-if="errorMessage">
        <p>{{ errorMessage }}</p>
      </div>
      <div class="form-box">
        <form @submit.prevent="redefinePassword()">
          <h3>Redefinir Senha</h3>
          <p>Enviaremos um e-mail com instruções para criar uma nova senha.</p>
          <input-field name="email" inputType="text" title="E-mail" v-model="userEmail" />
          <default-button typeButton="submit" title="Enviar" />
          <router-link to="/login">
            <p class="back">Voltar</p>
          </router-link>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import firebase from 'firebase/app';
import InputField from '@/components/InputField.vue';
import DefaultButton from '@/components/DefaultButton.vue';

export default {
  components: {
    'input-field': InputField,
    'default-button': DefaultButton,
  },
  data() {
    return {
      userEmail: '',
      errorMessage: '',
    };
  },
  methods: {
    redefinePassword() {
      firebase.auth().sendPasswordResetEmail(this.userEmail).then(() => {
        // eslint-disable-next-line no-alert
        alert('E-mail enviado');
        this.$router.push({ name: 'Home' });
      }).catch((error) => {
        if (error.code === 'auth/user-not-found') {
          this.errorMessage = 'Não existe uma conta cadastrada com este e-mail.';
        }
        console.log(error.message);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style";

#newPassword {
  @extend %flex-column;
  width: 100vw;
  height: 100vh;
  .newPassword-box {
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
    .form-box {
      @extend %form-box;
      margin: auto;
      width: 524px;
      form {
        padding: 30px 80px;
      }
      h3 {
        margin: 0 0 20px 0;
        font-family: $title-font;
        font-size: 2rem;
        text-align: center;
        color: $white;
      }
      p {
        font-weight: 300;
        color: $gray;
      }
      a {
        text-decoration: underline;
        color: #ffbfd1;
      }
      p.back {
        margin: 0;
        color: $soft-pink;
      }
    }
  }
}
</style>
