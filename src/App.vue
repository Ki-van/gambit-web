<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
export default {
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    'empty-layout': EmptyLayout,
    MainLayout
  }
}
</script>

<style lang="scss">
@import 'assets/index.css';

$primary_color_1: #28292B;
$primary_color_2: #5B5C5E;
$font_1: 'Yeseva One', serif;
$font_2: 'Josefin Sans', serif;

h1 {
  font-family: $font_1;
  color: $primary_color_1;
  font-size: 3em;
}

h2 {
  font-family: $font_2;
  color: $primary_color_1;
  font-size: 1.5em;
}

h3 {
  font-family: $font_2;
  color: $primary_color_2;
  font-size: 1.5em;
}

p {
  font-size: 1.5em;
  color: #28292B;
  font-family: "Josefin Sans", serif;
}

footer{
  background-color: #5B5C5E;
}

.box__border{
  border-radius: 50px;
  height: 60px;
}

.block__model__sel{
  background-color: #e6e6e6;
  border-radius: 50px;
}

.card__st{
  margin-top: 1em;
  max-width:380px !important;
  background-color: #28292B !important;
  border-radius: 30px !important;
}
.text__model{
  font-size: 1.5em;
  font-family: 'Josefin Sans', serif;
}

.heder__icon{
  height: 60px;
  loading: lazy;
}

.center{
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
}

.nav-link:hover{
  text-decoration: underline !important;
}

.btn-primary{
  color: #007bff !important;

  background-color: white !important;
  border-radius: 15px !important;
}

.btn-primary:hover{
  color: white !important;
  background-color: #007bff !important;
}

.btn-dark{
  color: #343a40 !important;

  background-color: white !important;
  border-radius: 15px !important;
}

.btn-dark:hover{
  color: white !important;
  background-color: #343a40 !important;
}
.left{
  justify-content: left !important;
  text-align: left !important;
}

.right{
  justify-content: right !important;
  text-align: right !important;
}

.ptop30{
  padding-top: 30px;
}

.social_block{
  padding-right: 4%;
}

.footer__social{
  text-align: right;
  justify-content: right;
  padding: 10px;
  color: white;
}

.social{
  padding: 0 0 0 10px;
}

.small, .LP{
  display: none;
}

.big{
  display: inline-block;
}

.flex__block, .flex__block__half{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.flex__block__half{
  width: 50%;
}

.block_l, .block_w{
  width: 50%;
}

.hr_w{
  box-sizing: border-box;
  width: 69%;
  border: 8px solid #27AE60;
}

.hr_l{
  box-sizing: border-box;
  width: 30%;
  border: 8px solid #EB5757;
}

.avatar{
  width: 300px;
  height: auto;
  margin-top: -55px;
  margin-right: -50px;
}

.personal__data__left{
  width: 70%;
}

.personal__data__right{
  width: 30%;
}

.heading, .ststus{
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 30px;

  color: #28292B;
}

.ststus{
  font-weight: normal;
  font-size: 36px;
  line-height: 30px;
}

.jam__write{
  padding: 0 0 30px 15px;
}

.logout{
  margin: 80px 30px 0 0;
}

.personal__data{
  padding: 35px 0 0 40px;
}

.block__personal__data{
  width: 100%;
  height: 187px;
  background: #E6E6E6;
  border-radius: 45px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
}

.title__text, .title__text__w, .title__text__l{
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 30px;
  color: #488BFE;
}

.title__text__w, .title__text__l{
  font-size: 32px;
  line-height: 40px;
  color: #27AE60;
}

.title__text__l{
  color: #EB5757;
}
.personal__text{
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #5B5C5E;
}

.mid{
  width: 80%;
}
.person__block{
  width: 10%;
}
.person{
  width: 100%;
}
.history__block{
  background: #E6E6E6;
  border-radius: 25px;
  margin-top: 30px;
  height: 75px;
}
.history__15, .history__10, .history__25,  .history__35,  .history__50, .history__20, .history__40{
  padding: 0 10px 0 10px;
  width: 15%;
}
.history__10{
  width: 10%;
}
.history__25{
  width: 25%;
}
.history__50{
  width: 50%;
}
.history__20{
  width: 20%;
}
.history__40{
  width: 40%;
}
.history__35{
  width: 35%;
}

.history__text, .history__text__c{
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 30px;
  color: #28292B;
}
.history__text__c{
  color: #27AE60;
}

@media (max-width: 950px) {
  .footer__social{
    text-align: center;
    justify-content: center;
  }
  .social_block{
    text-align: center;
    justify-content: center;
    padding-right: 0;
  }
  .social{
    padding: 0 10px 0 10px;
  }
  .personal__data__left, .personal__data__right{
    width: 100%;
  }
  .personal__data__right, .logout{
    justify-content: center !important;
    text-align: center !important;
  }
  .avatar{
    width: 200px;
    margin-top: 50px;
    margin-right: 0;
  }
  .logout{
    margin: 250px 0px 0 0;
  }
  .heading{
    font-size: 40px;
  }
  .ststus{
    font-size: 30px;
  }
}
@media (max-width: 768px) {
  .small, .LP{
    display: inline-block;
  }
  .big{
    display: none;
  }
  .avatar{
    width: 200px;
    margin-top: 50px;
    margin-right: 0;
  }
  .heading{
    font-size: 30px;
  }
  .ststus{
    font-size: 24px;
  }
  .flex__block__half{
    width: 100%;
  }
  .history__text, .history__text__c{
    font-size: 24px;
  }
}

@media (max-width: 455px) {
  .title__text, .title__text__w, .title__text__l, .personal__text, .heading{
    font-size: 24px;
  }
  .history__text, .history__text__c{
    font-size: 16px;
  }
}

</style>
