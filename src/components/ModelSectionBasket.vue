<template>
  <div class="mt-4" style="background-color: #e6e6e6; border-radius: 50px">
    <div class="row justify-content-end pt-4 pr-5" >
      <button class="border-0 " style="background-color: #e6e6e6;" @click="$store.dispatch('removeCartItem', item)">
        <img src="/img/icons_trash-can.svg" class="img-fluid" style="width: 30px">
      </button>
    </div>
    <div class="row p-lg-5 p-md-3 p-sm-3 px-3 my-2">
      <div class="col-lg-6">
        <VueSlickCarousel v-bind="gallerySettings">
          <div><img :src="item.image" class="img-fluid"></div>
        </VueSlickCarousel>
      </div>
      <div class="col-lg-6 mt-sm-4 mt-lg-0 mb-3">
        <h1>{{item.itemName}}</h1>
        <p>{{item.description}}</p>
        <div class="row ">
          <div class="col">
            <h1 class="font-weight-bold">{{item.price}}$</h1>
          </div>
          <div class="col">
            <Counter class="mt-3"
              :value="item.quantity"
              @input="counterHandler"
            />
          </div>
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
  props: ['item'],
  methods: {
    counterHandler(e){
      this.item.quantity = e;
      this.$store.dispatch('updateCartItem', this.item)
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>