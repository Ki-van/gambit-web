(function(t){function e(e){for(var i,s,l=e[0],c=e[1],o=e[2],u=0,d=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},s={app:0},n={app:0},r=[];function l(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c2169":"82d556f1","chunk-2d0d6d35":"7f2286fe","chunk-2d2086b7":"45ff187c","chunk-2d215c15":"f700739b","chunk-2d217e3c":"d7b3a6a0","chunk-2d2261a6":"93b0bf3d","chunk-2d22d746":"ad0f601a","chunk-3817d598":"4e6d3713"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-3817d598":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var i="css/"+({}[t]||t)+"."+{"chunk-2d0c2169":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d215c15":"31d6cfe0","chunk-2d217e3c":"31d6cfe0","chunk-2d2261a6":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3817d598":"d02f51d7"}[t]+".css",n=c.p+i,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var o=r[l],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===i||u===n))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){o=d[l],u=o.getAttribute("data-href");if(u===i||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete s[t],m.parentNode.removeChild(m),a(r)},m.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){s[t]=0})));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,a){i=n[t]=[e,a]}));e.push(i[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(t);var d=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,a[1](d)}n[t]=void 0}};var m=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"148b":function(t,e,a){"use strict";a("6e7d")},4181:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var i=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");i["default"].use(s["a"]);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.layout,{tag:"component"},[a("router-view")],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"vh-100",staticStyle:{"background-color":"#5B5C5E"}},[a("div",{staticClass:"container py-5 h-100"},[a("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[a("div",{staticClass:"col-12 col-md-8 col-lg-8 "},[a("div",{staticClass:"card shadow-2-strong",staticStyle:{"border-radius":"1rem"}},[t._m(0),a("div",{staticClass:"card-body pt-1 pb-5 pr-5 pl-5"},[a("router-view")],1)])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-end pt-4 pr-5"},[a("img",{staticClass:" img-fluid",staticStyle:{width:"22px"},attrs:{src:"/img/akar-icons_cross.svg"}})])}],o={name:"EmptyLayout"},u=o,d=a("2877"),m=Object(d["a"])(u,l,c,!1,null,"937b788c",null),f=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticStyle:{"background-color":"#f5f5f5"}},[a("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"img/logo.png",alt:"logo"}}),a("Header"),a("main",[a("router-view")],1),a("Footer")],1)},p=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer font-small pt-4 mt-5",staticStyle:{"background-color":"#5B5C5E"}},[a("div",{staticClass:"container-fluid text-center text-md-left"},[a("div",{staticClass:"d-flex row justify-content-around"},[a("div",[a("h5",{staticClass:"font-weight-bold mt-3 mb-4"},[t._v("Личный кабинет")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Личная информация")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Мои заказы")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Выход")])])])]),a("div",[a("h5",{staticClass:"font-weight-bold mt-3 mb-4"},[t._v("О нас")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Доставка и оплата")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Реквизиты")])])])]),a("div",[a("h5",{staticClass:"font-weight-bold mt-3 mb-4"},[t._v("Игать")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("История матчей")])])])]),a("div",[a("h5",{staticClass:"font-weight-bold  mt-3 mb-4"},[t._v("Продукция")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Корзина")])])])]),a("div",[a("h5",{staticClass:"font-weight-bold  mt-3 mb-4"},[t._v("Контакты")])]),a("div",[a("img",{attrs:{src:"img/logo.png",alt:"logo",height:"53"}})])])])])}],b={name:"Footer"},C=b,y=(a("148b"),Object(d["a"])(C,v,h,!1,null,"e9bf29bc",null)),_=y.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg sticky-top bg-light"},[a("div",{staticClass:"container-fluid justify-content-between"},[a("div",{staticClass:"d-flex"},[a("a",{staticClass:"navbar-brand me-2 mb-1 d-flex align-items-center",attrs:{href:"#"}},[a("img",{staticStyle:{"margin-top":"2px"},attrs:{src:"img/ion_person-circle-outline.png",height:"80",alt:"",loading:"lazy"}})])]),a("ul",{staticClass:"navbar-nav flex-row d-none d-md-flex"},[a("li",{staticClass:"nav-item me-3 me-lg-1 active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Главная")])]),a("li",{staticClass:"nav-item me-3 me-lg-1 "},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Продукция")])]),a("li",{staticClass:"nav-item me-3 me-lg-1 "},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Контакты")])]),a("li",{staticClass:"nav-item me-3 me-lg-1 "},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("О нас")])])]),a("ul",{staticClass:"navbar-nav flex-row"},[a("li",{staticClass:"nav-item me-3 me-lg-1"},[a("a",{staticClass:"nav-link d-sm-flex align-items-sm-center",attrs:{href:"#"}},[a("img",{staticClass:"rounded-circle",attrs:{src:"img/ion_cart-outline.svg",height:"46",alt:"",loading:"lazy"}}),a("span",{staticClass:"badge rounded-pill badge-notification bg-danger"},[t._v("1")])])]),a("li",{staticClass:"nav-item me-3 me-lg-1"},[a("a",{staticClass:"nav-link d-sm-flex align-items-sm-center",attrs:{href:"#"}},[a("img",{staticClass:"rounded-circle",attrs:{src:"img/ion_notifications-outline.svg",height:"46",alt:"",loading:"lazy"}}),a("span",{staticClass:"badge rounded-pill badge-notification bg-danger"},[t._v("1")])])])])])])}],x={name:"Header"},S=x,E=(a("b3ef"),Object(d["a"])(S,k,w,!1,null,"2f9b2afd",null)),j=E.exports,O={components:{Footer:_,Header:j}},$=O,A=Object(d["a"])($,g,p,!1,null,"7d864d52",null),B=A.exports,T={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{"empty-layout":f,MainLayout:B}},P=T,F=(a("5c0b"),Object(d["a"])(P,n,r,!1,null,null,null)),L=F.exports,N=a("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7"),a("3ca3"),a("ddb0");var q=a("8c4f"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-6 mt-2"},[a("VueSlickCarousel",t._b({},"VueSlickCarousel",t.gallerySettings,!1),[a("div",[a("img",{staticClass:"img-fluid ",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})])])],1)])]),t._m(1),a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"row"},[t._m(2),a("div",{staticClass:"col-lg-6 mt-2"},[a("VueSlickCarousel",t._b({},"VueSlickCarousel",t.gallerySettings,!1),[a("div",[a("img",{staticClass:"img-fluid ",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})])])],1)])]),a("div",{staticClass:"container mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 "},[a("VueSlickCarousel",t._b({},"VueSlickCarousel",t.gallerySettings,!1),[a("div",[a("img",{staticClass:"img-fluid ",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})]),a("div",[a("img",{staticClass:"img-fluid",attrs:{src:"img/plug.png",height:"auto"}})])])],1),t._m(3)])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6"},[a("h1",[t._v("Гамбит - это уникальная система игры в шахматы")]),a("p",[t._v(" Вам предстоит не просто нажимать на экран, а передвигать фигуры. Да да, как в старые добрые времена! Но для того, чтобы найти соперника, вам не нужно выходить в шахматный клуб, вы можете играть из дома. Наша система автоматически передвигает фигуры на вашей доске за Вашего оппонента, что предоставляет Вам возможность играть на любых расстояниях и со всеми желающими. ")]),a("div",{staticClass:"row mx-sm-auto"},[a("button",{staticClass:"btn btn-primary mx-auto"},[t._v("Купить доску")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid   mt-4",staticStyle:{"background-color":"#5B5C5E"}},[a("div",{staticClass:"d-flex justify-content-center "},[a("div",{staticClass:"mt-5 m-sm-0 text-center",staticStyle:{"max-width":"700px"}},[a("h1",{staticClass:"text-white "},[t._v(" Выбери свою доску и начни играть уже сейчас ")]),a("p",{staticClass:"text-white mt-4"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant neque suspendisse diam id in semper elementum. Felis, risus donec amet pretium. Sit ac in vel duis. Aliquam a pulvinar sed duis mus duis. ")])])]),a("div",{staticClass:"row justify-content-around  "},[a("div",{staticClass:"col-lg card",staticStyle:{"max-width":"395px","background-color":"#28292B","border-radius":"30px"}},[a("img",{staticClass:"card-img-top img-fluid mt-3 p-3",attrs:{src:"img/plug.png",alt:""}}),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row font-weight-bold text-white ",staticStyle:{"font-size":"1.5em","font-family":"'Josefin Sans', serif"}},[a("div",{staticClass:"col "},[t._v(" Модель 1 ")]),a("div",{staticClass:"col text-right"},[t._v("200$")])])])]),a("div",{staticClass:"col-lg card",staticStyle:{"max-width":"395px","background-color":"#28292B","border-radius":"30px"}},[a("img",{staticClass:"card-img-top img-fluid mt-3 p-3",attrs:{src:"img/plug.png",alt:""}}),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row font-weight-bold text-white ",staticStyle:{"font-size":"1.5em","font-family":"'Josefin Sans', serif"}},[a("div",{staticClass:"col "},[t._v(" Модель 1 ")]),a("div",{staticClass:"col text-right"},[t._v("200$")])])])]),a("div",{staticClass:"col-lg card",staticStyle:{"max-width":"395px","background-color":"#28292B","border-radius":"30px"}},[a("img",{staticClass:"card-img-top img-fluid mt-3 p-3",attrs:{src:"img/plug.png",alt:""}}),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row font-weight-bold text-white ",staticStyle:{"font-size":"1.5em","font-family":"'Josefin Sans', serif"}},[a("div",{staticClass:"col "},[t._v(" Модель 1 ")]),a("div",{staticClass:"col text-right"},[t._v("200$")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6"},[a("h1",[t._v("GAMBIT board - это не просто шахматная доска")]),a("p",[t._v(" Смарт-доска GAMBIT позволяет игроку проводить шахматные партии из любого места с любым соперником, просто скачай приложение или зарегистрируйся на сайте и начни игру! Доска автоматически синхронизируется с твоим соперником и совершает его ходы. Фигуры соперника двигаются сами, будто вы играете с призраком ")]),a("div",{staticClass:"row mx-sm-auto"},[a("button",{staticClass:"btn btn-dark mx-auto"},[t._v("Скачать приложение")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6 mt-2"},[a("h1",[t._v("Продвинутый онлайн сервис для игры")]),a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant neque suspendмisse diam id in semper elementum. Felis, risus donec amet pretium. Sit ac in vel duis. Aliquam a pulvinar sed duis mus duis. ")]),a("div",{staticClass:"row mx-sm-auto"},[a("button",{staticClass:"btn btn-dark mx-auto"},[t._v("Игать онлайн")])])])}],V=a("a7ab"),z=a.n(V),J=(a("7b8d"),a("6a2c"),{name:"Home",components:{VueSlickCarousel:z.a},data:function(){return{gallerySettings:{dots:!0,dotsClass:"slick-dots custom-dot-class",edgeFriction:.35,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1}}}}),I=J,D=(a("e03d"),Object(d["a"])(I,H,M,!1,null,"8c0e949a",null)),G=D.exports;i["default"].use(q["a"]);var K=[{path:"/",name:"home",meta:{layout:"main"},component:G},{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return a.e("chunk-2d2086b7").then(a.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return a.e("chunk-2d0d6d35").then(a.bind(null,"73cf"))}},{path:"/products",name:"products",meta:{layout:"main"},component:function(){return a.e("chunk-2d2261a6").then(a.bind(null,"e6dc"))}},{path:"/contacts",name:"contacts",meta:{layout:"main"},component:function(){return a.e("chunk-2d217e3c").then(a.bind(null,"c93c"))}},{path:"/about",name:"about",meta:{layout:"main"},component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/basket",name:"basket",meta:{layout:"main"},component:function(){return a.e("chunk-2d215c15").then(a.bind(null,"c00b"))}},{path:"/basket/delivery",name:"delivery",meta:{layout:"empty"},component:function(){return a.e("chunk-3817d598").then(a.bind(null,"bd1f"))}},{path:"/basket/delivery/address",name:"address",meta:{layout:"empty"},component:function(){return a.e("chunk-2d0c2169").then(a.bind(null,"498f"))}}],U=new q["a"]({mode:"history",base:"/",routes:K}),Q=U,R=a("2f62");i["default"].use(R["a"]);var W=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["default"].config.productionTip=!1,new i["default"]({router:Q,store:W,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6e7d":function(t,e,a){},"9c0c":function(t,e,a){},b3ef:function(t,e,a){"use strict";a("4181")},ce38:function(t,e,a){},e03d:function(t,e,a){"use strict";a("ce38")}});
//# sourceMappingURL=app.367c5492.js.map