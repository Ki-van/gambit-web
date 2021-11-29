<template>
  <section class="container-fluid pt-0">
    <h1>Выберите доступный способ доставки</h1>
    <div class="accordion" id="accordionExample">
      <div class="card border">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn w-100" type="button" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
              <div class="d-flex w-100 justify-content-between">
                <a>
                  Доставка Почтой России
                </a>
                <a class="text-info">
                  6-5 дней
                </a>
              </div>
            </button>
          </h2>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body row">
            <div class="col">
              <a>
                Доставка до ближайшего отделения почты России. Сроки и стоимость доставки варьируются в зависимости от
                отдаленности населенного пункта
              </a>
              <div class="mt-4">
                <a>
                  Для заказов от 100$ доставка осуществляется бесплатно
                </a>
              </div>
              <div class="mt-4">
                <h3 class="font-weight-bold">Стоимость:
                  <span style="color: #007bff">бесплатно</span>
                </h3>
              </div>
            </div>
            <div class="col">
              <img src="/img/location_map.png" class="img-fluid mx-auto"/>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-2 border">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn w-100" type="button" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseOne">
              <div class="d-flex w-100 justify-content-between">
                <a>
                  Доставка курьером до двери
                </a>
                <a class="text-info">
                  2-3 днея
                </a>
              </div>
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
            <div>
              <a>
                Доставка курьерской службой до двери. Предварительно с вами свяжется курьер для уточнения времени
                доставки. При получении вы можете проверить товар и при желании оформить заявление на возврат. Сроки и
                стоимость доставки варьируются в зависимости от отдаленности населенного пункта
              </a>
              <div class="row border-dark border mt-4" style="border-radius: 20px">
                <div class="col-8">
                  <span class="font-weight-bold">Адрес доставки:</span>
                  <span class="d-block"> г.Белгород, ул.Милосердия над верстальщиком, д.6, кв 66</span>
                </div>
                <div class="col d-flex align-content-center justify-content-center">
                  <a class="align-self-center">изменить </a>
                </div>
              </div>
              <div class="mt-4">
                <a>
                  Для заказов от 100$ доставка осуществляется бесплатно
                </a>
              </div>
              <div class="mt-4">
                <h3 class="font-weight-bold">Стоимость:
                  <span style="color: #007bff">10$</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-2 border">
        <div class="card-header" id="heading3">
          <h2 class="mb-0">
            <button class="btn w-100" type="button" data-toggle="collapse" data-target="#collapse3"
                    aria-expanded="true" aria-controls="collapseOne">
              <div class="d-flex w-100 justify-content-between">
                <a>
                  Boxberry
                </a>
                <a class="text-info">
                 3-4 дня
                </a>
              </div>
            </button>
          </h2>
        </div>
        <div id="collapse3" class="collapse show" aria-labelledby="heading3" data-parent="#accordionExample">
          <div class="card-body">
            <div>
              <p>BoxdamnBerry</p>

            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <button class="btn btn-primary w-75 mt-4">Подтвердить</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChangeDeliveryMethod"
}
</script>

<style scoped>
a {
  font-size: 1em;
}
</style>