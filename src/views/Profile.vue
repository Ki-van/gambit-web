<template>
  <section class="container">
    <div class="personal__block">
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
          <div class="right personal__data__right">
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
          <div class="flex__block">
            <hr class="hr_w left">
            <hr class="hr_l">
          </div>
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
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>