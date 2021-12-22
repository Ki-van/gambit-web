<template>
<section class="container">
<div class="row mt-4">
  <div class="col">
    <h1>Наши контакты</h1>
    <select class="form-select" aria-label="Disabled select example" disabled>
      <option selected>г. Белгород</option>
    </select>
    <p>
      Служба поддержки: 8999999999
    </p>
    <p>
      <span class="d-block">Телефон 1: 8999999999</span>
      <span class="d-block">Адрес 1: 8999999999</span>
    </p>
    <p>
      <span class="d-block">Телефон 2: 8999999999</span>
      <span class="d-block">Адрес 2: 8999999999</span>
    </p>
  </div>
  <div class="col">
    <img src="img/location_map.png" class="img-fluid"/>
  </div>
</div>

  <div class="center">
    <div class="block__personal__data">
      <div class="personal__data__left left">
        <div class="personal__data">
          <span class="heading">Иванов Иван Иванович</span>
          <img src="img/jam_write.png" class="jam__write">
        </div>
        <div class="personal__data">
          <span class="ststus">Статус</span>
        </div>
      </div>
      <div class="personal__data__right right">
        <img src="img/avatar.png" class="avatar">
      </div>
    </div>
  </div>

  <div class="right logout"><a>Выйти из профиля</a></div>

  <div class="left ptop30">
    <div class="ptop30">
        <span class="title__text">Сыгрынных партий - 340</span>
    </div>
    <div class="flex__block__half ptop30">
      <div class="block_w"><span class="title__text__w">Побед -  240</span></div>
      <div class="block_l right"><span class="title__text__l">Поражений - 100</span></div>
      <div class="flex__block"><hr class="hr_w left"><hr class="hr_l"></div>
    </div>
  </div>

  <div class="left ptop30">
    <div class="ptop30">
      <span class="title__text">Личная информация:</span>
      <img src="img/jam_write.png" class="jam__write">
    </div>
    <div>
      <div class="ptop30">
        <span class="personal__text">Город: </span><span class="personal__text">Белгород</span>
      </div>
      <div class="ptop30">
        <span class="personal__text">Возраст: </span><span class="personal__text">23</span>
      </div>
      <div class="ptop30">
        <span class="personal__text">Опыт: </span><span class="personal__text">Гроссмейстер</span>
      </div>
      <div class="ptop30">
        <span class="personal__text">Социальные сети: </span><span class="personal__text">ВК</span>
      </div>
    </div>
  </div>

  <div class="left ptop30">
    <div class="flex__block ptop30">
      <div class="flex__block__half"><span class="title__text">Мои заказы:</span></div>
      <div class="flex__block__half right"><a>см. всю историю заказов</a></div>
    </div>
    <div>
      <div class="ptop30">
        <span class="personal__text">На данный момент у вас нет активных заказов</span>
      </div>
    </div>
  </div>

</section>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style scoped>

</style>