<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col">
        <h1 class="font-weight-bold">Корзина({{cartQuantity}}):</h1>
      </div>
      <div class="col text-right">
        <a class="font-weight-lighter" style="cursor: pointer"
        @click="$store.dispatch('removeAllCartItems')"
        >Очистить корзину</a>
      </div>
    </div>
    <ModelSectionBasket
      v-for="item in cartItems"
      :item="item"
      :key="item.id"
    />

    <div class="row border-dark border mt-4 box__border">
      <div class="col">
        <span class="font-weight-bold">Способ доставки:</span>
        <span class="d-block"> {{ deliveryMethods[selectedDeliveryMethod].name }} (<span style="color: #007bff">{{addedCost}}</span>)</span>
      </div>
      <div class="col d-flex align-content-center right">
        <a class="align-self-center right" style="cursor: pointer" @click="$router.push('/basket/delivery')">Изменить способ доставки</a>
      </div>
    </div>

    <div class="row mt-4 ">
      <div class="col">
        <h1 class="font-weight-bold">Общая сумма: <span style="color: #007bff">{{cartTotal}}$</span></h1>
      </div>
      <div class="col d-flex justify-content-end">
        <button class="btn btn-primary align-self-center" @click="buy">Оплатить</button>
      </div>
    </div>

    <div class="row border-dark border mt-4 box__border">
      <input type="text" placeholder="Добавить комментарий к заказу" class="form-control-plaintext border-0" v-model="comment">
    </div>
  </section>
</template>

<script>
import ModelSectionBasket from "../components/ModelSectionBasket";
import {mapGetters} from "vuex";

export default {
  name: "Basket",
  components: {
    ModelSectionBasket
  },
  data(){
    return {
      comment: ''
    }
  },
  methods: {
    buy(){
      let order = {
        "deliveryMethod": this.selectedDeliveryMethod,
        "isActive": true,
        "isPaid": true,
        "comment": this.comment,
        "deliveryCompany": this.deliveryMethods[this.selectedDeliveryMethod].name,
        "recipientName": this.deliveryAddress.resieverName,
        "recipientPhoneNumber": this.deliveryAddress.resieverNumber,
        "recipientEmailAddress": this.deliveryAddress.resieverEmail,
        "deliveryAddress": this.deliveryAddressStringify,
        "orderItems": []
      }
      for (let i = 0; i < this.cartItems.length; i++) {
        order.orderItems.push({
          item: this.cartItems[i].id,
          count: this.cartItems[i].quantity,
          //optionName: this.cartItems[i].options[this.cartItems[i].optionNumber].name
        })
      }
      this.$store.dispatch('addOrder', order).then(() => {
        this.$store.dispatch('removeAllCartItems')

      }).finally(()=> this.$router.push('/profile'));

    }
  },
  computed: {
    addedCost(){
      if (this.deliveryMethods[this.selectedDeliveryMethod].deliveryCost === 0)
        return 'бесплатно'
      else return  " +" +this.deliveryMethods[this.selectedDeliveryMethod].deliveryCost + "р"

    },
    ...mapGetters([
      'cartItems',
      'cartTotal',
      'cartQuantity',
        'deliveryMethods',
        'selectedDeliveryMethod',
        'deliveryAddress',
        'deliveryAddressStringify',
        'chessboards'
    ])
  },
  async created() {
    await this.$store.dispatch('getDeliveryMethods');
    await this.$store.dispatch('getCartItems');
  }
}
</script>

<style scoped>

</style>