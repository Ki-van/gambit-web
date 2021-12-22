<template>
  <div class="p-2">
    <form @submit.prevent="submitHandler">

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
            placeholder="Фамилия Имя"
            v-model.trim="fullname"
            :class="{'is-invalid': $v.fullname.$dirty && (!$v.fullname.required)}"
        >
        <div class="invalid-feedback"
             v-if="$v.fullname.$dirty && !$v.fullname.required">
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
          <input type="radio" id="male" value="male" v-model="sex">
          Мужчина
        </label>
        <label class="btn btn-secondary">
          <input type="radio"  id="female" value="female" v-model="sex">
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
        <button type="submit" class="btn btn-primary col col-lg-4">Регистрация</button>
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
    fullname: '',
    birthdate: '',
    sex: '',
    city: '',
    email: '',
    password: '',
    experience: '',
  }),
  validations: {
    fullname: {required},
    birthdate: {required},
    email: {email, required},
    city: {required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    submitHandler() {
      if(this.$v.$invalid)
      {
        this.$v.$touch();
        return;
      }

      const formData = {
        fullname: this.fullname,
        birthdate: this.birthdate,
        sex: this.sex,
        city: this.city,
        email: this.email,
        password: this.password,
        experience: this.experience
      }
      console.log(formData);
      this.$router.push('/');
    }
  }

}
</script>

<style scoped>

</style>