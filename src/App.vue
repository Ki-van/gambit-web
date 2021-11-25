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
}

h2 {
  font-family: $font_2;
  color: $primary_color_1;
}

h3 {
  font-family: $font_2;
  color: $primary_color_2;
}



</style>
