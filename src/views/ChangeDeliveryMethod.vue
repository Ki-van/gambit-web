<template>
  <section class="container-fluid pt-0">
    <h1>Выберите доступный способ доставки</h1>
    <div class="accordion" id="accordionExample">
      <delivery-method
          v-for="method in deliveryMethods"
          :key="method.id"
          :method="method"
      />

      <div class="row justify-content-center">
        <button class="btn btn-primary w-75 mt-4">Подтвердить</button>
      </div>
    </div>
  </section>
</template>

<script>
import DeliveryMethod from "../components/DeliveryMethod";
import {mapGetters} from "vuex";
export default {
  name: "ChangeDeliveryMethod",
  components: {
    DeliveryMethod
  },
  async created() {
    await this.$store.dispatch('getDeliveryMethods');
  },
  computed: {
    ...mapGetters([
      'deliveryMethods'
    ])
  }
}
</script>

<style scoped>
a {
  font-size: 1em;
}
</style>