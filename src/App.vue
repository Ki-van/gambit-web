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

.nav-link:hover{
  text-decoration: underline;
}

.btn-primary{
  color: #007bff;

  background-color: white;
  border-radius: 15px;
}

.btn-primary:hover{
  color: white;
  background-color: #007bff;
}

.btn-dark{
  color: #343a40;

  background-color: white;
  border-radius: 15px;
}

.btn-dark:hover{
  color: white;
  background-color: #343a40;
}

.li{

}

</style>
