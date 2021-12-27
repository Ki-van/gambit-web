<template>
  <div class="p-2">
    <form @submit.prevent="handleLogin">
      <img src="img/logo.png" alt="logo" class="img-fluid d-flex mx-auto"/>
      <p class="text-justify">
        С возвращением! Пожалуйста оформите вход в свой аккаунт или создайте новый
      </p>
      <div class="form-floating mb-3 mt-3">
        <label for="username" class="form-label">Имя</label>
        <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Введите имя"
            v-model.trim="username"
            :class="{'is-invalid': ($v.username.$dirty) && (!$v.username.required || !$v.username.email || $v.username.alphaNum)}"
        >
        <div class="invalid-feedback" v-if="($v.username.$dirty) && !$v.username.required">
          Это поле не должно быть пустым
        </div>
        <div class="invalid-feedback"
             v-else-if="($v.username.$dirty) && !$v.username.minLength">
          Имя должен быть длиной минимум {{ $v.username.$params.minLength.min }}
        </div>
        <div class="invalid-feedback"
             v-else-if="($v.username.$dirty) && !$v.username.alphaNum">
          Имя может содержать только буквы и цифры
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="password"
               class="form-control"
               id="password"
               placeholder="Введите пароль"
               v-model.trim="password"
               autocomplete="on"
               :class="{'is-invalid': ($v.password.$dirty) && !$v.password.required || ($v.password.$dirty) && !$v.password.minLength}"
        >
        <div class="invalid-feedback" v-if="($v.password.$dirty) && !$v.password.required">
          Это поле не должно быть пустым
        </div>
        <div class="invalid-feedback"
             v-else-if="($v.password.$dirty) && !$v.password.minLength">
          Пароль должен быть длиной минимум {{ $v.password.$params.minLength.min }}
        </div>
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"> Запомнить меня
        </label>
      </div>

      <button type="submit" class="btn btn-primary col col-lg-4">
        <span class="spinner-border spinner-border-sm" v-show="loading"></span>
        <span>Войти</span>
      </button>
      <router-link to="/register">
        <button class="btn btn-primary col col-lg-5 m-lg-2 mt-1">Регистрация</button>
      </router-link>
      <div class="form-group mt-2">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </form>
    <div class="mt-3 " style="cursor: pointer">
      Войти с помощью
      <a class="font-weight-bold">ВКонтакте</a> <a class="font-weight-bold">Google</a>
    </div>
  </div>
</template>

<script>
import {required, minLength, alphaNum} from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data: () => ({
    username: '',
    password: '',
    remember: false,
    loading: false,
    message: '',
  }),
  validations: {
    username: {required, minLength: minLength(4), alphaNum},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    handleLogin() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.loading = true;
      let user = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/profile");
          },
          (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
}
</script>

<style scoped>

</style>