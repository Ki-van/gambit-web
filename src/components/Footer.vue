<template>
  <footer class="page-footer font-small pt-4 mt-5" style="background-color: #5B5C5E">
    <div class="container-fluid text-center text-md-left">
      <div class="d-flex row justify-content-around">
        <div>
          <h5 class="font-weight-bold mt-3 mb-4">Личный кабинет</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Личная информация</a>
            </li>
            <li>
              <a href="#!">Мои заказы</a>
            </li>
            <li>
              <a href="#!">Выход</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="font-weight-bold mt-3 mb-4">О нас</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Доставка и оплата</a>
            </li>
            <li>
              <a href="#!">Реквизиты</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="font-weight-bold mt-3 mb-4">Игать</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">История матчей</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="font-weight-bold  mt-3 mb-4">Продукция</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Корзина</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 class="font-weight-bold  mt-3 mb-4">Контакты</h5>
        </div>
        <div>
          <img src="img/logo.png" alt="logo" height="53"/>
        </div>
      </div>
      <div class="social_block">
        <div class="footer__social">
          <a href="https://vk.com/gambitchessgame" target="_blank">
            <img src="img/VK.png" alt="logo" class="social"/>
          </a>
          <a href="https://instagram.com/gambit_31bstu?utm_medium=copy_link" target="_blank">
            <img src="img/IN.png" alt="logo" class="social"/>
          </a>
          <img src="img/YT.png" alt="logo" class="social"/>
        </div>
        <ul class="list-unstyled footer__social">
          <li>
            <a>8-999-999-99-99</a>
          </li>
          <li>
            <a href="#!">©Сведения об ответственности</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
h5 {
  font-size: 1.5em;
  color: #e6e6e6;
}
a {
  font-size: 1.1em;
  color: #e6e6e6;
}
</style>