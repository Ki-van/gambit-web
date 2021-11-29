<template>
  <section class="vh-100" style="background-color: #5B5C5E;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-8 ">
          <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="row justify-content-end pt-4 pr-5">
              <img src="/img/akar-icons_cross.svg" class=" img-fluid" style="width: 22px">
            </div>
            <div class="card-body pt-1 pb-5 pr-5 pl-5">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EmptyLayout"
}
</script>

<style scoped>

</style>