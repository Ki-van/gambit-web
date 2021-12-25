<template>
  <nav class="navbar navbar-light navbar-expand-md bg-light sticky-top justify-content-between">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="inline right">
          <router-link
              to="/basket"
              tag="div"
              class="nav-item small">
            <a class="nav-link" href="">
              <img src="img/ion_cart-outline.svg" class="img-fluid heder__icon" alt="cart"/>
              <span class="badge rounded-pill badge-notification bg-danger">{{cartCount}}</span>
            </a>
          </router-link>
          <div class="nav-item small">
            <a class="nav-link small" href="">
              <img src="img/ion_notifications-outline.svg" class="img-fluid heder__icon" alt="notify"/>
              <span class="badge rounded-pill badge-notification bg-danger"></span>
            </a>
          </div>
      </div>
      <div class="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
        <ul class="navbar-nav center">
          <router-link
              to="/register"
              tag="li"
              class="nav-item big">
            <a class="nav-link p-0" href="#">
              <img src="img/ion_person-circle-outline.svg" class="heder__icon" alt="person"/>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="navbar-collapse collapse dual-nav w-100 order-2">
        <ul class="nav navbar-nav mx-auto center">
          <router-link
              v-for="link in links"
              :key="link.url"
              :to="link.url"
              tag="li"
              :exact="link.exact"
              class="nav-item me-3 me-lg-1 mx-3"
              :class="link.class"
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
              class="nav-item big">
            <a class="nav-link" href="">
              <img src="img/ion_cart-outline.svg" class="img-fluid heder__icon" alt="cart"/>
              <span class="badge rounded-pill badge-notification bg-danger">{{cartCount}}</span>
            </a>
          </router-link>
          <li class="nav-item big">
            <a class="nav-link" href="">
              <img src="img/ion_notifications-outline.svg" class="img-fluid heder__icon" alt="notify"/>
              <span class="badge rounded-pill badge-notification bg-danger"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",
  data: () => {
    return {
      links: [
        {title: 'Личный кабинет', url: '/profile', class: "small"},
        {title: 'Главная', url: '/', exact: true},
        {title: 'Продукция', url: '/products'},
        {title: 'Контакты', url: '/contacts'},
        {title: 'О нас', url: '/about'}
      ]
    }
  },
  computed: mapGetters(['cartCount'])
}
</script>

<style scoped>
a {
  font-family: 'Yeseva One', serif;
  color: #5B5C5E;
  font-size: 1.4em;
}
</style>