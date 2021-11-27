<template>
  <div class="p-2">

    <button class="bg-light border-0 float-right">X</button>
    <form>
      <div class="d-flex justify-content-center">
        <img src="img/avatar.png" alt="logo" class="img-fluid mx-auto d-block"/>
      </div>

      <p class="text-center fs-2">
        Добавьте фото
      </p>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" id="fullname" placeholder="ФИО" name="fullname">
      </div>
      <div class="mb-3">
        <input class="form-control" type="date" data-date-format='yyyy-mm-dd'>
      </div>
      <div class="btn-group  btn-group-toggle d-flex" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input type="radio" name="options" id="hatchback" autocomplete="off" checked> Я мужчина
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="sedan" autocomplete="off"> Я женщина
        </label>

      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" id="city" placeholder="Город" name="city">
      </div>
      <div class="mb-3 mt-3">
        <input type="email" class="form-control" id="email" placeholder="Email адрес" name="email">
      </div>
      <div class="mb-3 mt-3">
        <input type="password" class="form-control" id="password" placeholder="Пароль" name="password">
      </div>
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" id="exp" placeholder="Расскажите о вашем опыте" name="exp">
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary ">Зарегистрироваться</button>
      </div>


    </form>
    <p class="mt-3">
      Войти с помощию
      <a class="font-weight-bold">ВКонтакте</a> <a class="font-weight-bold">Google</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>