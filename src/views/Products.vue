<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>Мобильное приложение</h1>
          <p>
            Для дистанционной игры скачайте приложение GAMBIT.<br>
            Начните играть на расстоянии уже сейчас вместе с GAMBIT.
          </p>
          <div class="row mx-sm-auto">
            <button class="btn btn-primary mx-auto">Скачать приложение</button>
          </div>

        </div>
        <div class="col-lg-6 mt-2">
          <img src="img/Iphone_13.png" class="img-fluid">
        </div>
      </div>

      <ModelSectionLg
          v-for="chessboard in chessboards"
          :chessboard="chessboard"
          :key="chessboard.id"
      />
    </div>
  </section>
</template>

<script>
import ModelSectionLg from "../components/ModelSectionLg";
import {mapGetters} from "vuex";

export default {
  name: "Products",
  components: {
    ModelSectionLg
  },
  async mounted() {
    await this.$store.dispatch('getChessboards');
  },
  computed: {
    ...mapGetters([
      'chessboards'
    ])
  }
}
</script>

<style scoped>

</style>