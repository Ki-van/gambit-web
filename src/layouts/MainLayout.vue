<template>
  <section  style="background-color: #f5f5f5;">
    <img src="img/logo.png" alt="logo" class="img-fluid mx-auto d-block"/>
    <Header />
    <main>
      <router-view/>
    </main>
  <Footer />
  </section>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
export default {
  components: {
    Footer,
    Header
  }
};
</script>

<style scoped>


</style>