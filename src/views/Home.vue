<template>
  <section style="background-color: #f5f5f5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>Гамбит - это уникальная система игры в шахматы</h1>
          <p>
            Вам предстоит не просто нажимать на экран,
            а передвигать фигуры. Да да, как в старые добрые времена! Но для того, чтобы найти соперника, вам не нужно
            выходить в шахматный клуб, вы можете играть из дома. Наша система автоматически передвигает фигуры на вашей
            доске за Вашего оппонента, что предоставляет Вам возможность играть на любых расстояниях и со всеми
            желающими.
          </p>
          <div class="row mx-sm-auto">
            <button class="btn btn-primary mx-auto">Купить доску</button>
          </div>

        </div>
        <div class="col-lg-6 mt-2">
          <VueSlickCarousel v-bind="gallerySettings">
            <div><img src="img/plug.png" class="img-fluid " height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <div class="container-fluid d-block justify-content-center mt-4" style="background-color: #5B5C5E">
      <div class="d-block mt-3 w-50 mx-auto text-center">
        <h1 class="text-white">
          Выбери свою доску и начни играть уже сейчас
        </h1>
        <p class="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant neque suspendisse diam id in semper
          elementum.
          Felis, risus donec amet pretium. Sit ac in vel duis. Aliquam a pulvinar sed duis mus duis.
        </p>
      </div>
      <div class="row justify-content-around">
        <div class="col-lg card" style="max-width:395px; background-color: #28292B; border-radius: 30px">
          <img class="card-img-top img-fluid mt-3 p-3" src="img/plug.png" alt="">
          <div class="card-body">
            <div class="row font-weight-bold text-white " style="font-size: 1.5em; font-family: 'Josefin Sans', serif">
              <div class="col ">
                Модель 1
              </div>
              <div class="col text-right">200$</div>
            </div>
          </div>
        </div>
        <div class="col-lg card" style="max-width:395px; background-color: #28292B; border-radius: 30px">
          <img class="card-img-top img-fluid mt-3 p-3" src="img/plug.png" alt="">
          <div class="card-body">
            <div class="row font-weight-bold text-white " style="font-size: 1.5em; font-family: 'Josefin Sans', serif">
              <div class="col ">
                Модель 1
              </div>
              <div class="col text-right">200$</div>
            </div>
          </div>
        </div>
        <div class="col-lg card" style="max-width:395px; background-color: #28292B; border-radius: 30px">
          <img class="card-img-top img-fluid mt-3 p-3" src="img/plug.png" alt="">
          <div class="card-body">
            <div class="row font-weight-bold text-white " style="font-size: 1.5em; font-family: 'Josefin Sans', serif">
              <div class="col ">
                Модель 1
              </div>
              <div class="col text-right">200$</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <h1>GAMBIT board - это не просто шахматная доска</h1>
          <p>
            Смарт-доска GAMBIT позволяет игроку проводить шахматные партии из любого места с любым соперником, просто
            скачай приложение или зарегистрируйся на сайте и начни игру! Доска автоматически синхронизируется
            с твоим соперником и совершает его ходы. Фигуры соперника двигаются сами, будто вы играете с призраком
          </p>
          <div class="row mx-sm-auto">
            <button class="btn btn-dark mx-auto">Скачать приложение</button>
          </div>

        </div>
        <div class="col-lg-6 mt-2">
          <VueSlickCarousel v-bind="gallerySettings">
            <div><img src="img/plug.png" class="img-fluid " height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6 ">
          <VueSlickCarousel v-bind="gallerySettings">
            <div><img src="img/plug.png" class="img-fluid " height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
            <div><img src="img/plug.png" class="img-fluid" height=auto></div>
          </VueSlickCarousel>
        </div>
        <div class="col-lg-6 mt-2">
          <h1>Продвинутый онлайн сервис для игры</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant neque suspendмisse diam id in semper
            elementum. Felis, risus donec amet pretium. Sit ac in vel duis. Aliquam a pulvinar sed duis mus duis.
          </p>
          <div class="row mx-sm-auto">
            <button class="btn btn-dark mx-auto">Игать онлайн</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Home',
  components: {VueSlickCarousel},
  data() {
    return {
      gallerySettings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  }
}
</script>

<style scoped>
p {
  font-family: "Josefin Sans", serif;
  font-size: 1.5em;
}
</style>