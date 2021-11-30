<template>
  <div class="p-2">
    <form>
      <img src="img/logo.png" alt="logo" class="img-fluid d-flex mx-auto"/>
      <p class="">
        С возвращением! Пожалуйста оформите вход в свой аккаунт или создайте новый
      </p>
      <div class="form-floating mb-3 mt-3">
        <label for="email" class="form-label">Почта</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"> Remember me
        </label>
      </div>

      <button type="submit" class="btn btn-primary col col-lg-4">Войти</button>
      <button type="submit" class="btn btn-primary col col-lg-5 m-lg-2 mt-1">Регистрация</button>
    </form>
    <p class="mt-3">
      Войти с помощью
      <a class="font-weight-bold">ВКонтакте</a> <a class="font-weight-bold">Google</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>