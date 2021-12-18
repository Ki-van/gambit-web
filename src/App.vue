<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
export default {
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    'empty-layout': EmptyLayout,
    MainLayout
  }
}
</script>

<style lang="scss">
@import 'assets/index.css';

$primary_color_1: #28292B;
$primary_color_2: #5B5C5E;
$font_1: 'Yeseva One', serif;
$font_2: 'Josefin Sans', serif;

h1 {
  font-family: $font_1;
  color: $primary_color_1;
  font-size: 3em;
}

h2 {
  font-family: $font_2;
  color: $primary_color_1;
  font-size: 1.5em;
}

h3 {
  font-family: $font_2;
  color: $primary_color_2;
  font-size: 1.5em;
}

p {
  font-size: 1.5em;
  color: #28292B;
  font-family: "Josefin Sans", serif;
}

.center{
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
}

.nav-link:hover{
  text-decoration: underline !important;
}

.btn-primary{
  color: #007bff !important;

  background-color: white !important;
  border-radius: 15px !important;
}

.btn-primary:hover{
  color: white !important;
  background-color: #007bff !important;
}

.btn-dark{
  color: #343a40 !important;

  background-color: white !important;
  border-radius: 15px !important;
}

.btn-dark:hover{
  color: white !important;
  background-color: #343a40 !important;
}
.left{
  justify-content: left !important;
  text-align: left !important;
}

.right{
  justify-content: right !important;
  text-align: right !important;
}

.social_block{
  padding-right: 4%;
}

.footer__social{
  text-align: right;
  justify-content: right;
  padding: 10px;
}

.social{
  padding: 0 0 0 10px;
}

.small{
  display: none;
}

.big{
  display: block;
}

@media (max-width: 950px) {
  .footer__social{
    text-align: center;
    justify-content: center;
  }
  .social_block{
    text-align: center;
    justify-content: center;
    padding-right: 0;
  }
  .social{
    padding: 0 10px 0 10px;
  }
}

@media (max-width: 766px) {
  .small{
    display: block;
  }
  .big{
    display: none;
  }
}

</style>
