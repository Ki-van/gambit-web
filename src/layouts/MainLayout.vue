<template>
  <div>
    <img src="img/logo.png" alt="logo" class="img-fluid mx-auto d-block"/>
    <!-- Navbar-->
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid justify-content-between">
        <!-- Left elements -->
        <div class="d-flex">
          <!-- Person -->
          <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
            <img
                src="img/ion_person-circle-outline.png"
                height="80"
                alt=""
                loading="lazy"
                style="margin-top: 2px;"
            />
          </a>
        </div>
        <!-- Left elements -->

        <!-- Center elements -->
        <ul class="navbar-nav flex-row d-none d-md-flex">
          <li class="nav-item me-3 me-lg-1 active">
            <a class="nav-link" href="#">Главная</a>
          </li>
          <li class="nav-item me-3 me-lg-1 ">
            <a class="nav-link" href="#">Продукция</a>
          </li>
          <li class="nav-item me-3 me-lg-1 ">
            <a class="nav-link" href="#">Контакты</a>
          </li>
          <li class="nav-item me-3 me-lg-1 ">
            <a class="nav-link" href="#">О нас</a>
          </li>
        </ul>
        <!-- Center elements -->

        <!-- Right elements -->
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
              <img
                  src="img/ion_cart-outline.png"
                  class="rounded-circle"
                  height="46"
                  alt=""
                  loading="lazy"
              />
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
              <img
                  src="img/ion_notifications-outline.png"
                  class="rounded-circle"
                  height="46"
                  alt=""
                  loading="lazy"
              />
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
          </li>
        </ul>
        <!-- Right elements -->
      </div>
    </nav>
    <!-- Navbar -->
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
</script>

<style scoped>

</style>