<template>
  <div class="mt-4" style="background-color: #e6e6e6; border-radius: 50px">
    <div class="row justify-content-end pt-4 pr-5" >
      <button class="border-0 " style="background-color: #e6e6e6;">
        <img src="/img/icons_trash-can.svg" class=" img-fluid" style="width: 30px">
      </button>
    </div>
    <div class="row p-lg-5 p-md-3 p-sm-3 px-3 my-2">
      <div class="col-lg-6">
        <VueSlickCarousel v-bind="gallerySettings">
          <div><img src="img/plug.png" class="img-fluid " height=auto></div>
          <div><img src="img/plug.png" class="img-fluid" height=auto></div>
          <div><img src="img/plug.png" class="img-fluid" height=auto></div>
          <div><img src="img/plug.png" class="img-fluid" height=auto></div>
        </VueSlickCarousel>
      </div>
      <div class="col-lg-6 mt-sm-4 mt-lg-0 mb-3">
        <h1>Модель 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant neque suspendisse diam id in semper
          elementum. Felis, risus donec amet pretium. Sit ac in vel duis. Aliquam a pulvinar sed duis mus duis.</p>
        <div class="row ">
          <div class="col"><h1 class="font-weight-bold">200$</h1></div>
          <div class="col"><Counter class="mt-3"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import Counter from "./Counter";
export default {
  name: "ModelSection",
  data() {
    return {
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
  components: {VueSlickCarousel, Counter},
}
</script>

<style scoped>

</style>