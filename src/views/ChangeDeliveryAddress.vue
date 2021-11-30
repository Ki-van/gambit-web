<template>
  <section class="p-2">
    <form>
      <h1>Заполните данные доставки</h1>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" placeholder="ФИО получателя">
      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" placeholder="Номер телефона">
      </div>
      <div class="mb-3 mt-3">
        <input type="email" class="form-control" placeholder="Email адрес">
      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" placeholder="Город">
      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" placeholder="Улица">
      </div>
      <div class="row mb-3 mt-3">
        <div class="col-5">
          <input type="text" class="form-control" placeholder="Почтовый индекс">
        </div>
        <div class="col-3">
          <input type="text" class="form-control" placeholder="№ Дома">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" placeholder="№ Квартиры">
        </div>

      </div>
      <button type="submit" class="btn btn-primary col col-lg-5">Подтвердить</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ChangeDeliveryAddress"
}
</script>

<style scoped>

</style>