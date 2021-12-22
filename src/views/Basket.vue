<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col">
        <h1 class="font-weight-bold">Корзина(2):</h1>
      </div>
      <div class="col text-right">
        <a class="font-weight-lighter">очистить корзину</a>
      </div>
    </div>
    <ModelSectionBasket />
    <ModelSectionBasket />
    <div class="row border-dark border mt-4 box__border">
      <div class="col">
        <span class="font-weight-bold">Способ доставки:</span>
        <span class="d-block"> Курьером до двери (<span style="color: #007bff">+10$</span>)</span>
      </div>
      <div class="col d-flex align-content-center right">
        <a class="align-self-center right">Изменить способ доставки</a>
      </div>
    </div>

    <div class="row mt-4 ">
      <div class="col">
        <h1 class="font-weight-bold">Общая сумма: <span style="color: #007bff">200$</span></h1>
      </div>
      <div class="col d-flex justify-content-end">
        <button class="btn btn-primary align-self-center">Оплатить</button>
      </div>
    </div>

    <div class="row border-dark border mt-4 box__border">
      <input type="text" placeholder="Добавить комментарий к заказу" class="form-control-plaintext border-0">
    </div>
  </section>
</template>

<script>
import ModelSectionBasket from "../components/ModelSectionBasket";
export default {
  name: "Basket",
  components: {
    ModelSectionBasket
  }
}
</script>

<style scoped>

</style>