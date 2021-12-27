<template>
  <section class="p-2">
    <form @submit.prevent="handleSubmit">
      <h1>Заполните данные доставки</h1>
      <div class="mb-3 mt-3">
        <input
            type="text"
            class="form-control"
            v-model="resieverFullname"
            placeholder="ФИО получателя"
            :class="{'is-invalid': ($v.resieverFullname.$dirty) && !$v.resieverFullname.required }"
        >
      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" v-model="resieverNumber"
               placeholder="Номер телефона"
               :class="{'is-invalid': ($v.resieverNumber.$dirty) && !$v.resieverNumber.required }"
        >
      </div>
      <div class="mb-3 mt-3">
        <input type="email" class="form-control" v-model="resieverEmail"
               :class="{'is-invalid': ($v.resieverEmail.$dirty) && !$v.resieverEmail.required }"
               placeholder="Email адрес">
      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" v-model="city"
               :class="{'is-invalid': ($v.city.$dirty) && !$v.city.required }"
               placeholder="Город">
      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control"
               :class="{'is-invalid': ($v.street.$dirty) && !$v.street.required }"
               v-model="street" placeholder="Улица">
      </div>
      <div class="row mb-3 mt-3">
        <div class="col-5">
          <input type="text" class="form-control" v-model="postalCode"
                 :class="{'is-invalid': ($v.postalCode.$dirty) && !$v.postalCode.required }"
                 placeholder="Почтовый индекс">
        </div>
        <div class="col-3">
          <input type="text" class="form-control"
                 :class="{'is-invalid': ($v.houseNumber.$dirty) && !$v.houseNumber.required }"
                 v-model="houseNumber" placeholder="№ Дома">
        </div>
        <div class="col-4">
          <input type="text" class="form-control"
                 :class="{'is-invalid': ($v.apartment.$dirty) && !$v.apartment.required }"
                 v-model="apartment" placeholder="№ Квартиры">
        </div>

      </div>
      <button type="submit" class="btn btn-primary col col-lg-5">Подтвердить</button>
    </form>
  </section>
</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
  name: "ChangeDeliveryAddress",
  data(){
    return {
      resieverFullname: '',
      resieverNumber: '',
      resieverEmail: '',
      city: '',
      street: '',
      postalCode: '',
      houseNumber: '',
      apartment: ''
    }
  },
  validations: {
    resieverFullname: {required},
    resieverNumber: {required},
    resieverEmail: {required},
    city: {required},
    street: {required},
    postalCode: {required},
    houseNumber: {required},
    apartment: {required}
  },
  methods: {
    handleSubmit() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$store.commit("updateDeliveryAddress", {
        resieverFullname: this.resieverFullname,
        resieverNumber: this.resieverNumber,
        resieverEmail: this.resieverEmail,
        city: this.city,
        street: this.street,
        postalCode: this.postalCode,
        houseNumber: this.houseNumber,
        apartment: this.apartment
      })
      this.$router.go(-1);
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    this.resieverFullname = this
  }
}
</script>

<style scoped>

</style>