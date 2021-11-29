<template>
  <div class="container">
    <button class="btn btn-dark rounded rounded-circle text-center font-weight-bold" v-on:click="counter++">+</button>
    <span class="font-weight-bold ml-2 mr-2">{{ counter }}</span>
    <button class="btn btn-dark rounded-circle font-weight-bold" v-on:click="counter > 1? counter--:counter">-</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 1
    }
  }
}
</script>

<style scoped>

</style>