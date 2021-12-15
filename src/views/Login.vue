<template>
  <div class="p-2">
    <form @submit.prevent="submitHandler">
      <img src="img/logo.png" alt="logo" class="img-fluid d-flex mx-auto"/>
      <p class="text-justify">
        С возвращением! Пожалуйста оформите вход в свой аккаунт или создайте новый
      </p>
      <div class="form-floating mb-3 mt-3">
        <label for="email" class="form-label">Почта</label>
        <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
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
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
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
          Пароль должен быть длиной минимум {{$v.password.$params.minLength.min}}
        </div>
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"> Remember me
        </label>
      </div>

      <button type="submit" class="btn btn-primary col col-lg-4">Войти</button>
      <router-link to="/register" >
        <button class="btn btn-primary col col-lg-5 m-lg-2 mt-1">Регистрация</button>
      </router-link>

    </form>
    <div class="mt-3 " style="cursor: pointer">
      Войти с помощью
      <a class="font-weight-bold " >ВКонтакте</a> <a class="font-weight-bold">Google</a>
    </div>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
  name: "Login",
  data: ()=>({
    email:'',
    password:''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>