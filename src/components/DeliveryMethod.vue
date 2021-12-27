<template>
  <div class="card mt-2 border">
    <!--      <div class="card mt-2 border card__st">-->
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn w-100" type="button" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseOne">
          <div class="d-flex w-100 justify-content-between">
            <a>
              {{method.name}}
            </a>
            <a class="text-info">
              {{method.arrivesWithinMin[7]}} - {{method.arrivesWithinMin[7]}}
            </a>
          </div>
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <div>
          <a>
           {{method.description}}
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
              {{method.costNote}}
            </a>
          </div>
          <div class="mt-4">
            <h3 class="font-weight-bold">Стоимость:
              <span style="color: #007bff">{{method.deliveryCost?method.deliveryCost + 'р': 'Бесплатно'}}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "DeliveryMethod",
  props: ['method']
}
</script>

<style scoped>

</style>