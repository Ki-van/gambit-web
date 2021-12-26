<template>
  <div class="mt-4 block__model__sel">
    <div class="row p-lg-5 p-md-3 p-sm-3 py-4 px-3">
      <div class="col-lg-6">
        <VueSlickCarousel v-bind="gallerySettings">
          <div><img :src="chessboard.image" class="img-fluid"></div>
        </VueSlickCarousel>
      </div>
      <div class="col-lg-6 mt-sm-3 mt-3">
        <h1>{{chessboard.itemName}}</h1>
        <p>{{chessboard.description}}</p>
        <p>Характеристики:</p>
        <p>ШхДхВ - {{chessboard.widthCm}}x{{chessboard.lengthCm}}x{{chessboard.heightCm}}</p>
        <div class="flex__block">
          <div class="left">
            <span class="font-weight-bold" style="font-size: 1.5em">{{chessboard.price}}$</span>
          </div>
          <div class="right">
            <img src="img/derevo.png" class="radio__btn">
            <img src="img/metal.png" class="radio__btn">
            <img src="img/plastik.png" class="radio__btn">
          </div>
        </div>
        <div class="flex__block">
          <div class="left">
            <button class="btn btn-primary btn-buy">Купить</button>
          </div>
          <div class="right">
            <button class="btn btn-dark btn-basket" @click="$store.dispatch('addCartItem', chessboard)">В корзину</button>
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
  props: ['chessboard']
}
</script>

<style scoped>
.left, .right{
  width: 50%;
}

@media (max-width: 588px) {
  .left, .right{
    padding-top: 5px;
    text-align: center !important;
    justify-content: center !important;
    width: 100%;
  }
}

</style>