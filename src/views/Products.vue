<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>Мобильное приложение</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant neque suspendisse diam id in semper
            elementum. Felis, risus donec amet pretium. Sit ac in vel duis. Aliquam a pulvinar sed duis mus duis.
          </p>
          <div class="row mx-sm-auto">
            <button class="btn btn-primary mx-auto">Скачать приложение</button>
          </div>

        </div>
        <div class="col-lg-6 mt-2">
          <img src="img/plug.png" class="img-fluid">
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
import UserService from "../services/user.service";

export default {
  name: "Products",
  components: {
    ModelSectionLg
  },
  data() {
    return {
      chessboards: null
    }
  },
  mounted() {
    UserService.getChessBoards().then(
        (response) => {
          this.chessboards = response.data;
        },
        (error) => {
          let message =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();
          console.error(message);
        }
    );
  }
}
</script>

<style scoped>

</style>