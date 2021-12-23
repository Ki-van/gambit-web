<template>
  <div class="p-2">
    <form @submit.prevent="handleRegister">
      <div>
        <img src="img/avatar.png" class="img-fluid d-flex mx-auto"/>
      </div>
      <p class="text-center">
        Добавьте фото
      </p>
      <div class="mb-3 mt-3">
        <input
            type="text"
            class="form-control"
            id="fullname"
            placeholder="Имя"
            v-model.trim="username"
            :class="{'is-invalid': $v.username.$dirty && (!$v.username.required)}"
        >
        <div class="invalid-feedback"
             v-if="$v.username.$dirty && !$v.username.required">
          Это поле не должно быть пустым
        </div>
      </div>

      <div class="mb-3">
        <input
            class="form-control"
            type="date"
            data-date-format='yyyy-mm-dd'
            v-model.trim="birthdate"
            :class="{'is-invalid': $v.birthdate.$dirty && !$v.birthdate.required}"
        >
        <div class="invalid-feedback"
             v-if="$v.birthdate.$dirty && !$v.birthdate.required">
          Это поле не должно быть пустым
        </div>
      </div>

      <div class="btn-group  btn-group-toggle d-flex" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input type="radio" id="male" value="male" @click="sex = 1">
          Мужчина
        </label>
        <label class="btn btn-secondary">
          <input type="radio" id="female" value="female" @click="sex = 2">
          Женщина
        </label>
      </div>

      <div class="mb-3 mt-3">
        <input type="text"
               class="form-control"
               id="city"
               placeholder="Город"
               v-model.trim="city"
               :class="{'is-invalid': $v.city.$dirty && !$v.city.required}"
        >
        <div class="invalid-feedback"
             v-if="$v.city.$dirty && !$v.city.required">
          Это поле не должно быть пустым
        </div>
      </div>

      <div class="mb-3 mt-3">
        <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Почта"
            v-model.trim="email"
            :class="{'is-invalid': ($v.email.$dirty) && !$v.email.required || ($v.email.$dirty) && !$v.email.email}"
        >
        <div class="invalid-feedback"
             v-if="($v.email.$dirty) && !$v.email.required">
          Введите Email
        </div>
        <div class="invalid-feedback"
             v-else-if="($v.email.$dirty) && !$v.email.email">
          Введите корректный Email
        </div>
      </div>

      <div class="mb-3 mt-3">
        <input type="password"
               class="form-control"
               id="password"
               placeholder="Enter password"
               v-model.trim="password"
               :class="{'is-invalid': ($v.password.$dirty) && !$v.password.required || ($v.password.$dirty) && !$v.password.minLength}"
        >
        <div class="invalid-feedback"
             v-if="($v.password.$dirty) && !$v.password.required"
        >
          Введите пароль
        </div>
        <div class="invalid-feedback"
             v-else-if="($v.password.$dirty) && !$v.password.minLength">
          Пароль должен быть длиной минимум {{ $v.password.$params.minLength.min }}
        </div>
      </div>

      <div class="mb-3 mt-3">
        <input type="text" class="form-control" id="exp" placeholder="Расскажите о вашем опыте" name="exp">
      </div>
      <div class="center">
        <button type="submit" class="btn btn-primary col col-lg-4" :disabled="loading">
          <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
          ></span>
          Регистрация
        </button>
        <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div>
      </div>
      <div class="mt-sm-1">
        <a>Есть аккаунт?</a>
        <router-link to="/login">
          Войти
        </router-link>
      </div>


    </form>
    <div class="mt-3">
      Войти с помощию
      <a class="font-weight-bold">ВКонтакте</a> <a class="font-weight-bold">Google</a>
    </div>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: "Register",
  data: () => ({
    username: '',
    birthdate: '',
    sex: '',
    city: '',
    email: '',
    password: '',
    experience: '',
    loading: false,
    successful: false,
    message: ''
  }),
  validations: {
    username: {required},
    birthdate: {required},
    email: {email, required},
    city: {required},
    password: {required, minLength: minLength(6)}
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;
          }
      );
    },
  },

}
</script>

<style scoped>

</style>