<template>
  <div class="mt-4 block__model__sel">
    <div class="row p-lg-5 p-md-3 p-sm-3 py-4 px-3">
      <div class="col-lg-6">
        <VueSlickCarousel v-bind="gallerySettings">
          <div><img src="img/plug.png" class="img-fluid"></div>
          <div><img src="img/plug.png" class="img-fluid"></div>
          <div><img src="img/plug.png" class="img-fluid"></div>
          <div><img src="img/plug.png" class="img-fluid"></div>
        </VueSlickCarousel>
      </div>
      <div class="col-lg-6 mt-sm-3 mt-3">
        <h1>Модель 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant neque suspendisse diam id in semper
          elementum. Felis, risus donec amet pretium. Sit ac in vel duis. Aliquam a pulvinar sed duis mus duis.</p>
        <p>Характеристики:</p>
        <p>ШхДхВ - ____</p>
        <span class="font-weight-bold" style="font-size: 1.5em">100$</span>
        <div class="flex__block">
          <div class="left">
            <button class="btn btn-primary">Купить</button>
          </div>
          <div class="right">
            <button class="btn btn-dark">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "ModelSection",
  data(){
    return{
      gallerySettings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "arrows": false,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  },
  components: {VueSlickCarousel},
}
</script>

<style scoped>
.left, .right{
  width: 50%;
}
</style>