<template>
  <div class="container">
    <button class="btn btn-dark rounded rounded-circle text-center font-weight-bold"
            @click="counter++;
            $emit('input', counter)"
    >+
    </button>
    <span class="font-weight-bold ml-2 mr-2">{{ counter }}</span>
    <button class="btn btn-dark rounded-circle font-weight-bold"
            @click="counter > 1? counter--:counter;
            $emit('input', counter)"
    >-
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ['value'],
  data() {
    return {
      counter: this.value
    }
  }
}
</script>

<style scoped>

</style>