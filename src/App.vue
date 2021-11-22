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

</style>
