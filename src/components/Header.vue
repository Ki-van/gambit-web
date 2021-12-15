<template>
  <nav class="navbar navbar-light navbar-expand-md bg-light sticky-top justify-content-between">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
        <ul class="navbar-nav ">
          <router-link
              to="/register"
              tag="li"
              class="nav-item  ">
            <a class="nav-link p-0" href="#">
              <img src="img/ion_person-circle-outline.svg" alt="person" loading="lazy" height="60px"/>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="navbar-collapse collapse dual-nav w-100 order-2">
        <ul class="nav navbar-nav mx-auto">
          <router-link
              v-for="link in links"
              :key="link.url"
              :to="link.url"
              tag="li"
              :exact="link.exact"
              class="nav-item me-3 me-lg-1 mx-3"
              active-class="active">
            <a class="nav-link" href="#">{{ link.title }}</a>
          </router-link>
        </ul>
      </div>
      <div class="navbar-collapse collapse  dual-nav w-50 order-3">
        <ul class="nav navbar-nav ml-auto ">
          <router-link
              to="/basket"
              tag="li"
              class="nav-item ">
            <a class="nav-link" href="">
              <img src="img/ion_cart-outline.svg" class="img-fluid" height="60px" alt="cart" loading="lazy"/>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
          </router-link>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="img/ion_notifications-outline.svg" class="img-fluid" height="60px" alt="notify" loading="lazy"/>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      links: [
        {title: 'Главная', url: '/', exact: true},
        {title: 'Продукция', url: '/products'},
        {title: 'Контакты', url: '/contacts'},
        {title: 'О нас', url: '/about'}
      ]
    }
  }
}
</script>

<style scoped>
a {
  font-family: 'Yeseva One', serif;
  color: #5B5C5E;
  font-size: 1.4em;
}
</style>