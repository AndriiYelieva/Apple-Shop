(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(27).concat([function(e,t,c){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){"use strict";c.r(t);var s,a,n=c(1),i=c(28),r=c.n(i),o=c(25),l=c(6),d=c(40),j=c(5),b=c(3),u=(c(51),c(52),c(0)),m=function(e){var t=e.searchQuery,c=e.setSearchQuery,s=Object(b.l)(),a=["/Phones","/Tablets","/Accessories","/Favourites"].includes(s.pathname),n="Search in ".concat(s.pathname.substring(1));return Object(u.jsx)(u.Fragment,{children:a&&Object(u.jsxs)("label",{className:"search search__container",htmlFor:"Mute volume",children:[Object(u.jsx)("input",{onChange:function(e){var t=e.currentTarget.value;c(t)},value:t,placeholder:n,onKeyDown:function(e){"Enter"===e.key&&c("")},className:"search__query"}),t?Object(u.jsx)("button",{id:"Mute volume",type:"button","aria-label":"Mute volume",className:"icon icon__close",onClick:function(){c("")}}):Object(u.jsx)("div",{className:"icon icon__search"})]})})},h=(c(55),function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){var e=function(){window.scrollY?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var a=function(){window.scrollTo({top:0,behavior:"smooth"})};return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(l.b,{to:"/",className:"container__logo",onClick:a}),Object(u.jsxs)("div",{className:"container__description",children:[Object(u.jsx)("a",{className:"container__link",href:"https://github.com/AndriiYelieva",target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(u.jsx)("a",{className:"container__link",href:"https://www.linkedin.com/in/andriiyelieva/",target:"_blank",rel:"noopener noreferrer",children:"Contacts"}),Object(u.jsx)(l.b,{className:"container__link",to:"/Rights",children:"Rights"})]}),c?Object(u.jsxs)("div",{className:"container__button",children:[Object(u.jsx)("p",{className:"container__button--text",children:"Back to top"}),Object(u.jsx)("button",{type:"button",className:"container__button--arrow","aria-label":"Mute volume",onClick:a})]}):Object(u.jsx)("div",{className:"container__button--fake"})]})})});!function(e){e.NEWEST="Newest",e.ALPHABETICALLY="Alphabetically",e.CHEAPEST="Cheapest"}(s||(s={})),function(e){e.All="All",e.Four="4",e.Eight="8",e.Sixtten="16"}(a||(a={}));c(56);var _=function(){var e=Object(l.d)(),t=Object(j.a)(e,2),c=t[0],n=t[1],i=c.get("sortBy")||"Newest",r=c.get("NumberOptions")||"4";return Object(u.jsxs)("div",{className:"dropdowns",children:[Object(u.jsxs)("div",{className:"dropdowns__sort--wrapper",children:[Object(u.jsx)("p",{children:"Sort by"}),Object(u.jsxs)("select",{value:i,onChange:function(e){var t=new URLSearchParams(c);t.set("sortBy",e.target.value),n(t)},className:"dropdowns__sort","data-cy":"paginationLeft",children:[Object(u.jsx)("option",{value:s.NEWEST,children:s.NEWEST}),Object(u.jsx)("option",{value:s.ALPHABETICALLY,children:s.ALPHABETICALLY}),Object(u.jsx)("option",{value:s.CHEAPEST,children:s.CHEAPEST})]})]}),Object(u.jsxs)("div",{className:"dropdowns__items--wrapper",children:[Object(u.jsx)("p",{children:"Items on page"}),Object(u.jsxs)("select",{value:r,onChange:function(e){var t=new URLSearchParams(c);t.set("NumberOptions",e.target.value),n(t)},className:"dropdowns__items","data-cy":"paginationRight",children:[Object(u.jsx)("option",{value:a.Four,children:a.Four}),Object(u.jsx)("option",{value:a.Eight,children:a.Eight}),Object(u.jsx)("option",{value:a.Sixtten,children:a.Sixtten}),Object(u.jsx)("option",{value:a.All,children:a.All})]})]})]})},p=c(10),O=c.n(p),x=(c(57),function(){return Object(o.b)()}),v=o.c,N=function(e){var t=e.isActive;return O()("nav__link",{"nav__link--active":t})},f=function(e){var t=e.searchQuery,c=void 0===t?"":t,s=e.setSearchQuery,a=void 0===s?function(){}:s,n=Object(b.l)(),i=v((function(e){return e.favourites})),r=v((function(e){return e.cart}));return Object(u.jsx)("header",{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsxs)("div",{className:"nav nav__container",children:[Object(u.jsx)(l.c,{to:"/",className:"nav__link icon icon__logo"}),Object(u.jsxs)("div",{className:"nav nav__links",children:[Object(u.jsx)(l.c,{to:"/",className:N,children:"Home"}),Object(u.jsx)(l.c,{to:"/Phones",className:N,children:"Phones"}),Object(u.jsx)(l.c,{to:"/Tablets",className:N,children:"Tablets"}),Object(u.jsx)(l.c,{to:"/Accessories",className:N,children:"Accessories"})]})]}),Object(u.jsxs)("div",{className:"nav__personally",children:[Object(u.jsx)(m,{searchQuery:c,setSearchQuery:a}),Object(u.jsx)(l.c,{to:"/Favourites",className:function(e){var t=e.isActive;return O()("icon icon__favourites",{"icon__favourites--active":t})},children:0!==i.length&&Object(u.jsx)("div",{className:"slected",children:Object(u.jsx)("span",{className:"slected__text",children:"".concat(i.length)})})}),Object(u.jsx)(l.c,{to:"/Shopping",className:function(e){var t=e.isActive;return O()("icon icon__shopping",{"icon__shopping--active":t})},children:0!==r.length&&Object(u.jsx)("div",{className:"slected",children:Object(u.jsx)("span",{className:"slected__text",children:"".concat(r.length)})})}),"/Menu"===n.pathname?Object(u.jsx)(l.b,{to:"..",className:"icon icon__close"}):Object(u.jsx)(l.b,{to:"/Menu",className:"icon icon__menu"})]})]})})})},g=(c(27),c(58),c.p+"static/media/Phones.9d91280e.png"),y=c.p+"static/media/Tablets.ab919a9b.png",w=c.p+"static/media/Accessories.c89ddada.png",k=function(e){var t=e.phones;return Object(u.jsxs)("section",{className:"category__section",children:[Object(u.jsx)("h1",{className:"category__name",children:"Shop by category"}),Object(u.jsxs)("div",{className:"category",children:[Object(u.jsxs)(l.b,{to:"/Phones",className:"container__category",children:[Object(u.jsx)("div",{className:"category__phones",children:Object(u.jsx)("img",{className:"category__phones--img",src:g,alt:"Mobile phones"})}),Object(u.jsxs)("div",{className:"category__description",children:[Object(u.jsx)("h3",{className:"category__title",children:"Mobile phones"}),Object(u.jsx)("p",{className:"category__presence",children:"".concat(t.length," models")})]})]}),Object(u.jsxs)(l.b,{to:"/Tablets",className:"container__category",children:[Object(u.jsx)("div",{className:"category__tablets",children:Object(u.jsx)("img",{className:"category__tablets--img",src:y,alt:"Tablets"})}),Object(u.jsxs)("div",{className:"category__description",children:[Object(u.jsx)("h3",{className:"category__title",children:"Tablets"}),Object(u.jsx)("p",{className:"category__presence",children:"".concat(0," models")})]})]}),Object(u.jsxs)(l.b,{to:"/Accessories",className:"container__category",children:[Object(u.jsx)("div",{className:"category__accessories",children:Object(u.jsx)("img",{className:"category__accessories--img",src:w,alt:"Accessories"})}),Object(u.jsxs)("div",{className:"category__description",children:[Object(u.jsx)("h3",{className:"category__title",children:"Accessories"}),Object(u.jsx)("p",{className:"category__presence",children:"".concat(0," models")})]})]})]})]})},C=c(13),A=c(9),P=(c(59),"https://mate-academy.github.io/react_phone-catalog"),E=c(21),F=Object(E.b)({name:"favourites",initialState:[],reducers:{addFavourites:function(e,t){e.push(t.payload)},removeFavourites:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},clearFavourites:function(){return[]}}}),S=F.reducer,L=F.actions,M=L.addFavourites,T=L.removeFavourites,I=(L.clearFavourites,c(14)),B=Object(E.b)({name:"cart",initialState:[],reducers:{addCart:function(e,t){e.push(Object(I.a)(Object(I.a)({},t.payload),{},{amount:1}))},removeCart:function(e,t){return e.filter((function(e){return e.phoneId!==t.payload.phoneId}))},clearCart:function(){return[]},addAmountCart:function(e,t){return e.map((function(e){return e.phoneId===t.payload.phoneId?Object(I.a)(Object(I.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount+1:1}):e}))},removeAmountCart:function(e,t){return e.map((function(e){return e.phoneId===t.payload.phoneId?Object(I.a)(Object(I.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount-1:1}):e}))}}}),R=B.reducer,D=B.actions,H=D.addCart,Q=D.removeCart,V=(D.clearCart,D.addAmountCart),Y=D.removeAmountCart,U=function(e,t){return t.find((function(t){return t.phoneId===e.phoneId}))},W=function(e,t){return t.find((function(t){return t.phoneId===e}))},$=function(e){var t=e.phone,c=x(),s=v((function(e){return e.favourites})),a=v((function(e){return e.cart})),n=function(e){var s=U(t,a);c(void 0===s?H(e):Q(e))};return Object(u.jsxs)("div",{className:"product__card phones__list--card",children:[Object(u.jsx)(l.b,{className:"phoneDetails",to:"/Phones/".concat(t.phoneId),children:Object(u.jsx)("div",{className:"product__photo",children:Object(u.jsx)("img",{className:"product__photo--img",src:"".concat(P,"/_new/").concat(t.image),alt:t.phoneId})})}),Object(u.jsxs)("div",{className:"product__description",children:[Object(u.jsx)("p",{className:"product__text--body",children:t.name}),Object(u.jsxs)("div",{className:"product__price",children:[Object(u.jsx)("h2",{className:"product__price--current",children:"$".concat(t.price)}),Object(u.jsx)("h2",{className:"product__price--discount",children:"$".concat(t.fullPrice)})]}),Object(u.jsxs)("div",{className:"product__screen",children:[Object(u.jsx)("p",{className:"product__screen--name",children:"Screen"}),Object(u.jsx)("p",{className:"product__screen--value",children:t.screen})]}),Object(u.jsxs)("div",{className:"product__capacity",children:[Object(u.jsx)("p",{className:"product__capacity--name",children:"Capacity"}),Object(u.jsx)("p",{className:"product__capacity--value",children:t.capacity})]}),Object(u.jsxs)("div",{className:"product__ram",children:[Object(u.jsx)("p",{className:"product__ram--name",children:"RAM"}),Object(u.jsx)("p",{className:"product__ram--value",children:t.ram})]}),Object(u.jsxs)("div",{className:"product__button",children:[U(t,a)?Object(u.jsx)("button",{type:"button",className:"product__button--isActive",onClick:function(){return n(t)},children:"Added to cart"}):Object(u.jsx)("button",{type:"button",className:"product__button--add",onClick:function(){return n(t)},children:"Add to cart"}),Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:"product__button--favourites-wrapper",onClick:function(){return function(e){var a=U(t,s);c(void 0===a?M(e):T(e))}(t)},children:Object(u.jsx)("div",{className:O()("product__button--favourites",{"product__button--favourites--isActive":U(t,s)})})})]})]})]})},J=(c(62),function(e){var t=e.phones.sort((function(e,t){return t.fullPrice-e.fullPrice}));return Object(u.jsxs)("section",{className:"models",children:[Object(u.jsxs)("div",{className:"models__wrapper",children:[Object(u.jsx)("h1",{className:"models__title",children:"Brand new models"}),Object(u.jsxs)("div",{className:"models__button",children:[Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:O()("models__button models__button--left")}),Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:O()("models__button models__button--right")})]})]}),Object(u.jsx)("div",{className:"product",children:Object(u.jsx)(C.a,{navigation:{nextEl:".models__button--right",prevEl:".models__button--left"},breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4}},modules:[A.b,A.c,A.d],className:"swiper__models",children:t.map((function(e){return Object(u.jsx)(C.b,{children:Object(u.jsx)($,{phone:e})},e.id)}))})})]})}),z=(c(63),function(e){var t=e.phones,c=Object(l.d)(),s=Object(j.a)(c,2),a=s[0],n=s[1],i=a.get("NumberOptions")||"4",r=a.get("page")||"1",o=Math.ceil(t.length/+i);var d=+o,b=new Array(d).fill(d).map((function(e,t){return t+1})).slice(+r-3,+r+2);return+r<=3&&(b=[1,2,3,4,5]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){return function(e){var t;t=+e-1,+e<=1&&(t=1);var c=new URLSearchParams(a);c.set("page",t.toString()),n(c)}(r)},type:"button","aria-label":"Mute volume",className:"pagination__button pagination__button--left"}),b.map((function(e){return Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",onClick:function(){!function(e){var t=new URLSearchParams(a);t.set("page",e),n(t)}(e.toString())},className:O()("pagination__button pagination__button--pagination",{"pagination__button-active":e===+r}),children:e},e)})),Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",onClick:function(){return function(e){var t;t=+e+1,+e>=o&&(t=+e);var c=new URLSearchParams(a);c.set("page",t.toString()),n(c)}(r)},className:"pagination__button pagination__button--right"})]})}),G=(c(64),function(e){var t=e.phones.filter((function(e){return e.fullPrice>1200})).sort((function(e,t){return t.fullPrice-e.fullPrice}));return Object(u.jsxs)("section",{className:"hot",children:[Object(u.jsxs)("div",{className:"hot__wrapper",children:[Object(u.jsx)("h1",{className:"hot__title",children:"Hot prices"}),Object(u.jsxs)("div",{className:"hot__button",children:[Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:O()("hot__button hot__button--left")}),Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:O()("hot__button hot__button--right")})]})]}),Object(u.jsx)("div",{className:"product",children:Object(u.jsx)(C.a,{navigation:{nextEl:".hot__button--right",prevEl:".hot__button--left"},breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4}},modules:[A.b,A.c,A.d],className:"swiper__hot",children:t.map((function(e){return Object(u.jsx)(C.b,{children:Object(u.jsx)($,{phone:e})},e.id)}))})})]})}),q=(c(65),c(66),c(67),c(68),c.p+"static/media/banner-accessories.bf0f1fbf.png"),K=[{id:0,url:c.p+"static/media/banner-phones.6aba00f4.png"},{id:1,url:c.p+"static/media/banner-tablets.2e5de25c.png"},{id:2,url:q}];A.e.use([A.b,A.c,A.d,A.a]);var Z=function(){return Object(u.jsxs)("div",{className:"container--banner",children:[Object(u.jsxs)("div",{className:"container--content",children:[Object(u.jsx)("button",{type:"button",className:"arrow arrow__left review-swiper-button-prev","aria-label":"Mute volume"}),Object(u.jsx)(C.a,{navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},autoplay:{delay:3500},pagination:{clickable:!0,el:".swiper-custom-pagination"},loop:!0,modules:[A.b,A.c,A.d],className:"mySwiper",children:K.map((function(e){return Object(u.jsx)(C.b,{children:Object(u.jsx)("img",{src:e.url,alt:"Banner"})},e.id)}))}),Object(u.jsx)("button",{type:"button",className:"arrow arrow__right review-swiper-button-next","aria-label":"Mute volume"})]}),Object(u.jsx)("div",{className:"container--pagination",children:Object(u.jsx)("div",{className:"swiper-custom-pagination"})})]})},X={rosegold:"#F9D2CD",gold:"#F3DBC4",silver:"#D9DADB",black:"#363539",green:"#BEE8D5",yellow:"#FEE889",white:"#FCF7F4",purple:"#CCC2D6",red:"#CD283F",spacegray:"#4E4D4B",midnightgreen:"#5F6960",coral:"#FD6A56"},ee=(c(69),function(e){var t,c=e.colors,s=e.currentCapacity,a=e.nameId,n=e.currentColor,i=e.phone,r=e.capacities,o=e.phoneId,d=e.phones,j=x(),b=v((function(e){return e.cart})),m=v((function(e){return e.favourites})),h=d.find((function(e){return e.phoneId===o}));h&&(t=h);var _=function(e){void 0===W(o,b)?j(H(e)):j(Q(e))};return Object(u.jsxs)("div",{className:"params",children:[Object(u.jsxs)("div",{className:"params__color",children:[Object(u.jsx)("p",{className:"params__color--heading",children:"Available colors"}),Object(u.jsx)("div",{className:"colors__list",children:c.map((function(e){return Object(u.jsx)("div",{className:"colors__item",children:Object(u.jsx)("div",{className:O()("colors__border",{"colors__border--selected":e===n}),children:Object(u.jsx)(l.b,{to:"/Phones/".concat(a,"-").concat(s.toLocaleLowerCase(),"-").concat(e),className:"colors__circle",style:{backgroundColor:"".concat(X[e])}})})},e)}))})]}),Object(u.jsxs)("div",{className:"params__capacity",children:[Object(u.jsx)("p",{className:"params__capacity--heading",children:"Select capacity"}),Object(u.jsx)("div",{className:"capacities__list",children:r.map((function(e){return Object(u.jsx)(l.b,{to:"/Phones/".concat(a,"-").concat(e.toLocaleLowerCase(),"-").concat(n),className:O()("capacities__link",{"capacities__link--selected":e===s}),children:e},e)}))})]}),Object(u.jsxs)("div",{className:"params__shop",children:[Object(u.jsxs)("div",{className:"params__shop__price",children:[Object(u.jsx)("h2",{className:"params__shop__price--current",children:"$".concat(i.priceDiscount)}),Object(u.jsx)("h2",{className:"params__shop__price--discount",children:"$".concat(i.priceRegular)})]}),Object(u.jsxs)("div",{className:"params__shop__button",children:[W(o,b)?Object(u.jsx)("button",{type:"button",className:"params__shop__button--isActive",onClick:function(){return _(t)},children:"Added to cart"}):Object(u.jsx)("button",{type:"button",className:"params__shop__button--add",onClick:function(){return _(t)},children:"Add to cart"}),Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:"params__shop__button--favourites-wrapper",onClick:function(){return e=t,void(void 0===W(o,m)?j(M(e)):j(T(e)));var e},children:Object(u.jsx)("div",{className:O()("product__button--favourites",{"product__button--favourites--isActive":W(o,m)})})})]})]}),Object(u.jsxs)("div",{className:"params__description",children:[Object(u.jsxs)("div",{className:"params__description--specs",children:[Object(u.jsx)("p",{className:"params__description--name",children:"Screen"}),Object(u.jsx)("p",{className:"params__description--value",children:null===i||void 0===i?void 0:i.screen})]}),Object(u.jsxs)("div",{className:"params__description--specs",children:[Object(u.jsx)("p",{className:"params__description--name",children:"Resolution"}),Object(u.jsx)("p",{className:"params__description--value",children:null===i||void 0===i?void 0:i.resolution})]}),Object(u.jsxs)("div",{className:"params__description--specs",children:[Object(u.jsx)("p",{className:"params__description--name",children:"Processor"}),Object(u.jsx)("p",{className:"params__description--value",children:null===i||void 0===i?void 0:i.processor})]}),Object(u.jsxs)("div",{className:"params__description--specs",children:[Object(u.jsx)("p",{className:"params__description--name",children:"RAM"}),Object(u.jsx)("p",{className:"params__description--value",children:null===i||void 0===i?void 0:i.ram})]})]})]})}),te=(c(70),function(e){var t=e.images,c=Object(n.useState)(0),s=Object(j.a)(c,2),a=s[0],i=s[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"photos",children:[Object(u.jsx)("div",{className:"photos__side",children:t.map((function(e,t){return Object(u.jsx)("button",{type:"button",className:"photos__buttons",onClick:function(){return i(t)},children:Object(u.jsx)("img",{src:"".concat(P,"/_new/").concat(e),alt:"side_photo",className:"photos__sidePhoto"})},e)}))}),Object(u.jsx)("div",{className:"photos__main",children:Object(u.jsx)("img",{className:"photos__main__img",src:"".concat(P,"/_new/").concat(t[a]),alt:"main_photo"})})]})})}),ce=(c(71),function(e){var t=e.phones.filter((function(e){return e.fullPrice>1200})).sort((function(e,t){return t.fullPrice-e.fullPrice}));return Object(u.jsxs)("section",{className:"like",children:[Object(u.jsxs)("div",{className:"like__wrapper",children:[Object(u.jsx)("h1",{className:"like__title",children:"You may also like"}),Object(u.jsxs)("div",{className:"like__button",children:[Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:O()("like__button like__button--left")}),Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:O()("like__button like__button--right")})]})]}),Object(u.jsx)("div",{className:"product",children:Object(u.jsx)(C.a,{navigation:{nextEl:".like__button--right",prevEl:".like__button--left"},breakpoints:{640:{slidesPerView:2},900:{slidesPerView:3},1280:{slidesPerView:4}},modules:[A.b,A.c,A.d],className:"swiper__like",children:t.map((function(e){return Object(u.jsx)(C.b,{children:Object(u.jsx)($,{phone:e})},e.id)}))})})]})}),se=(c(72),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),ae=(c(73),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{type:"button",className:"back","data-cy":"backButton",onClick:function(){window.history.back()},children:"back"})})}),ne=(c(74),function(e){var t=e.cart,c=x();return Object(u.jsx)("div",{className:"carts",children:Object(u.jsxs)("div",{className:"cart carts__content",children:[Object(u.jsxs)("div",{className:"carts__content--wrapper",children:[Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:"cart__button cart__button--close",onClick:function(){return c(Q(t))}}),Object(u.jsx)("img",{src:"".concat(P,"/_new/").concat(t.image),alt:"cart",className:"cart__img"})]}),Object(u.jsx)("p",{className:"cart__name",children:t.name}),Object(u.jsxs)("div",{className:"cart__price--wrapper",children:[Object(u.jsxs)("div",{className:"cart__buttons",children:[Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:O()("cart__button--minus cart__button cart--button",{"cart__button--minusActive":1!==t.amount}),onClick:function(){return c(Y(t))},disabled:1===t.amount}),t.amount,Object(u.jsx)("button",{type:"button","aria-label":"Mute volume",className:"cart__button--plus cart__button cart--button",onClick:function(){return c(V(t))}})]}),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h2",{className:"cart__price",children:"$".concat(t.fullPrice)})})]})]})},t.itemId)}),ie=(c(75),function(e){var t=e.phones,c=e.isLoading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("main",{children:[c&&Object(u.jsx)(se,{}),!c&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Z,{}),Object(u.jsx)(G,{phones:t}),Object(u.jsx)(k,{phones:t}),Object(u.jsx)(J,{phones:t})]})]})]})});c(76);function re(e){return new Promise((function(t){setTimeout(t,e)}))}var oe=function(e){return function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(c.body=JSON.stringify(t),c.headers={"Content-Type":"application/json; charset=UTF-8"}),re(500).then((function(){return fetch(P+e,c)})).then((function(e){var t;if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return(null===(t=e.headers.get("content-type"))||void 0===t?void 0:t.includes("application/json"))?e.json():new Error("Content-type is not supported")}))}(e)},le=function(e){var t=e.phones,c=Object(n.useState)(!0),s=Object(j.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)(null),o=Object(j.a)(r,2),d=o[0],m=o[1],h=Object(b.p)().phoneId;Object(n.useEffect)((function(){h&&function(e){return oe("/_new/products/".concat(e,".json"))}(h).then(m).finally((function(){return i(!1)}))}),[h]);var _=null===d||void 0===d?void 0:d.images;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("main",{children:[a&&Object(u.jsx)(se,{}),!a&&Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("section",{className:"breadcrumbs",children:[Object(u.jsx)(l.b,{to:"/",className:"breadcrumbs__button breadcrumbs__icon"}),Object(u.jsx)("div",{className:"breadcrumbs__arrow breadcrumbs__icon"}),Object(u.jsx)(l.b,{to:"/Phones",className:"breadcrumbs__pages",children:Object(u.jsx)("p",{children:"Phones"})}),Object(u.jsx)("div",{className:"breadcrumbs__arrow breadcrumbs__icon"}),Object(u.jsx)("p",{className:"breadcrumbs__phoneId",children:h})]}),Object(u.jsxs)("section",{className:"details__title",children:[Object(u.jsx)(ae,{}),Object(u.jsx)("h1",{className:"details__title--name",children:null===d||void 0===d?void 0:d.name})]}),Object(u.jsx)("section",{className:"details__main",children:Object(u.jsxs)("div",{className:"details__main--wrapper",children:[_&&Object(u.jsx)(te,{images:_}),d&&h&&Object(u.jsx)(ee,{colors:d.colorsAvailable,currentCapacity:d.capacity,nameId:d.namespaceId,currentColor:d.color,phone:d,capacities:d.capacityAvailable,phoneId:h,phones:t})]})}),Object(u.jsxs)("section",{className:"details__description",children:[Object(u.jsxs)("div",{className:"details__description--about",children:[Object(u.jsx)("h2",{className:"details__description--h2",children:"About"}),Object(u.jsx)("h3",{className:"details__description--about--h3",children:null===d||void 0===d?void 0:d.description[0].title}),Object(u.jsx)("p",{className:"details__description--about--title",children:null===d||void 0===d?void 0:d.description[0].text}),Object(u.jsx)("h3",{className:"details__description--about--h3",children:null===d||void 0===d?void 0:d.description[1].title}),Object(u.jsx)("p",{className:"details__description--about--title",children:null===d||void 0===d?void 0:d.description[1].text}),Object(u.jsx)("h3",{className:"details__description--about--h3",children:null===d||void 0===d?void 0:d.description[2].title}),Object(u.jsx)("p",{className:"details__description--about--title",children:null===d||void 0===d?void 0:d.description[2].text})]}),Object(u.jsxs)("div",{className:"details__description--tech",children:[Object(u.jsx)("h2",{className:"details__description--h2",children:"Tech specs"}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"Screen"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.screen})]}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"Resolution"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.resolution})]}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"Processor"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.processor})]}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"RAM"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.ram})]}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"Built in memory"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.capacity})]}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"Camera"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.camera})]}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"Zoom"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.zoom})]}),Object(u.jsxs)("div",{className:"details__description--tech--specs",children:[Object(u.jsx)("p",{className:"details__description--tech--name",children:"Cell"}),Object(u.jsx)("p",{className:"details__description--tech--value",children:null===d||void 0===d?void 0:d.cell.join(", ")})]})]})]}),Object(u.jsx)("section",{className:"details__like",children:Object(u.jsx)(ce,{phones:t})})]})]})]})},de=(c(77),function(e){var t=e.isLoading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("main",{children:[t&&Object(u.jsx)(se,{}),!t&&Object(u.jsxs)("section",{className:"tablets",children:[Object(u.jsxs)("div",{className:"breadcrumbs",children:[Object(u.jsx)(l.b,{to:"/",className:"breadcrumbs__button breadcrumbs__icon"}),Object(u.jsx)("div",{className:"breadcrumbs__arrow breadcrumbs__icon"}),Object(u.jsx)("p",{children:"Tablets"})]}),Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h1",{children:"Tablets"}),Object(u.jsx)("p",{className:"title__p",children:"".concat(0," items")})]}),Object(u.jsxs)("div",{className:"tablets__description",children:[Object(u.jsx)("h1",{className:"tablets__description--h1",children:"Oops!"}),Object(u.jsxs)("p",{className:"tablets__description--title",children:["Apologies for the inconvenience, but tablets are",Object(u.jsx)("br",{}),"not available yet! We appreciate your",Object(u.jsx)("br",{}),"understanding. Maybe you want to go back to",Object(u.jsx)("br",{})]}),Object(u.jsx)(l.b,{to:"/",className:"tablets__description--home",children:"Home page"})]})]})]})]})}),je=(c(78),function(e){var t=e.isLoading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("main",{children:[t&&Object(u.jsx)(se,{}),!t&&Object(u.jsxs)("section",{className:"accessories",children:[Object(u.jsxs)("div",{className:"breadcrumbs",children:[Object(u.jsx)(l.b,{to:"/",className:"breadcrumbs__button breadcrumbs__icon"}),Object(u.jsx)("div",{className:"breadcrumbs__arrow breadcrumbs__icon"}),Object(u.jsx)("p",{children:"Accessories"})]}),Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h1",{children:"Accessories"}),Object(u.jsx)("p",{className:"title__p",children:"".concat(0," items")})]}),Object(u.jsxs)("div",{className:"accessories__description",children:[Object(u.jsx)("h1",{className:"accessories__description--h1",children:"Oops!"}),Object(u.jsxs)("p",{className:"accessories__description--title",children:["Apologies for the inconvenience, but accessories",Object(u.jsx)("br",{}),"are not available yet! We appreciate your",Object(u.jsx)("br",{}),"understanding. Maybe you want to go back to",Object(u.jsx)("br",{})]}),Object(u.jsx)(l.b,{to:"/",className:"accessories__description--home",children:"Home page"})]})]})]})]})}),be=(c(79),function(e){var t=e.isLoading,c=Object(n.useState)(""),s=Object(j.a)(c,2),a=s[0],i=s[1],r=v((function(e){return e.favourites})).filter((function(e){return e.name.toLowerCase().includes(a.trim().toLowerCase())}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{searchQuery:a,setSearchQuery:i}),t&&Object(u.jsx)(se,{}),!t&&Object(u.jsx)("main",{children:Object(u.jsxs)("section",{className:"favourites",children:[Object(u.jsxs)("div",{className:"breadcrumbs",children:[Object(u.jsx)(l.b,{to:"/",className:"breadcrumbs__button breadcrumbs__icon"}),Object(u.jsx)("div",{className:"breadcrumbs__arrow breadcrumbs__icon"}),Object(u.jsx)("p",{children:"Favourites"})]}),Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h1",{children:"Favourites"}),Object(u.jsx)("p",{className:"title__p",children:"".concat(r.length," models")})]}),Object(u.jsx)("div",{className:"favourites__list",children:r.map((function(e){return Object(u.jsx)($,{phone:e},e.id)}))})]})})]})}),ue=(c(80),function(e){var t=e.isLoading,c=v((function(e){return e.cart})),s=c.reduce((function(e,t){return void 0!==t.amount?e+t.amount*t.fullPrice:0}),0),a=c.reduce((function(e,t){return void 0!==t.amount?e+t.amount:0}),0);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),t&&Object(u.jsx)(se,{}),!t&&Object(u.jsxs)("main",{className:"cart",children:[Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"cart__title",children:[Object(u.jsx)(ae,{}),Object(u.jsx)("h1",{className:"cart__title--cart",children:"Cart"})]})}),0!==c.length?Object(u.jsxs)("section",{className:"cart__content",children:[Object(u.jsx)("div",{className:"cart__content--cards",children:c.map((function(e){return Object(u.jsx)(ne,{cart:e},e.id)}))}),Object(u.jsxs)("div",{className:"cart__outcome",children:[Object(u.jsx)("h1",{className:"cart__outcome--price",children:"$".concat(s)}),Object(u.jsx)("p",{className:"cart__outcome--total",children:"Total for ".concat(a," items")}),Object(u.jsx)("button",{type:"button",className:"cart__outcome--checkout",children:"Checkout"})]})]}):Object(u.jsx)("h1",{children:"Your cart is empty"})]})]})}),me=(c(81),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)("h1",{className:"notFound__h1",children:"Page not found\ud83d\udc40"})]})}),he=(c(82),function(e){var t=e.phones,c=e.isLoading,a=Object(n.useState)(""),i=Object(j.a)(a,2),r=i[0],o=i[1],d=Object(l.d)(),b=Object(j.a)(d,2),m=b[0],h=b[1],p=m.get("sortBy")||"Newest",O=m.get("NumberOptions")||"4",x=m.get("page")||"1",v=+O*(+x-1),N=Math.min(+O*+x,t.length);Object(n.useEffect)((function(){var e=new URLSearchParams(m);e.set("page","1"),h(e)}),[O]);var g,y,w,k=t.filter((function(e){return e.name.toLowerCase().includes(r.trim().toLowerCase())})),C=function(e,t){switch(t){case s.NEWEST:return e.sort((function(e,t){return t.fullPrice-e.fullPrice}));case s.ALPHABETICALLY:return e.sort((function(e,t){return e.name.localeCompare(t.name)}));case s.CHEAPEST:return e.sort((function(e,t){return e.fullPrice-t.fullPrice}));default:return e}}(t,p),A=(g=k,w=N,(y=v)||w?C.slice(y,w):g);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{searchQuery:r,setSearchQuery:o}),Object(u.jsxs)("main",{children:[c&&Object(u.jsx)(se,{}),!c&&Object(u.jsx)(u.Fragment,{children:""!==r?Object(u.jsx)(u.Fragment,{children:0!==k.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("p",{className:"title__p",children:"".concat(k.length," results")})}),Object(u.jsx)("section",{className:"phones__list",children:k.map((function(e){return Object(u.jsx)($,{phone:e},e.id)}))})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("p",{className:"title__nothing",children:"We found nothing\ud83d\udc40"})})})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"phones",children:[Object(u.jsxs)("div",{className:"breadcrumbs",children:[Object(u.jsx)(l.b,{to:"/",className:"breadcrumbs__button breadcrumbs__icon"}),Object(u.jsx)("div",{className:"breadcrumbs__arrow breadcrumbs__icon"}),Object(u.jsx)("p",{children:"Phones"})]}),Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h1",{children:"Mobile phones"}),Object(u.jsx)("p",{className:"title__p",children:"".concat(t.length," models")})]})]}),Object(u.jsx)(_,{}),Object(u.jsx)("section",{className:"container--list phones__list",children:A.map((function(e){return Object(u.jsx)($,{phone:e},e.id)}))}),Object(u.jsx)("section",{className:"pagination",children:"All"!==O&&Object(u.jsx)(z,{phones:t})})]})})]})]})}),_e=(c(83),function(e){var t=e.isLoading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("main",{children:[t&&Object(u.jsx)(se,{}),!t&&Object(u.jsxs)("nav",{className:"menu",children:[Object(u.jsx)(l.b,{to:"/",className:"menu__link",children:"Home"}),Object(u.jsx)(l.b,{to:"/Phones",className:"menu__link",children:"Phones"}),Object(u.jsx)(l.b,{to:"/Tablets",className:"menu__link",children:"Tablets"}),Object(u.jsx)(l.b,{to:"/Accessories",className:"menu__link",children:"Accessories"})]})]})]})}),pe=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),i=Object(j.a)(a,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){oe("/_new/products.json").then((function(e){s(e)})).finally((function(){return o(!1)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{path:"/",element:Object(u.jsx)(ie,{phones:c,isLoading:r})}),Object(u.jsxs)(b.a,{path:"/Phones",children:[Object(u.jsx)(b.a,{index:!0,element:Object(u.jsx)(he,{phones:c,isLoading:r})}),Object(u.jsx)(b.a,{path:":phoneId",element:Object(u.jsx)(le,{phones:c})})]}),Object(u.jsx)(b.a,{path:"/Tablets",element:Object(u.jsx)(de,{isLoading:r})}),Object(u.jsx)(b.a,{path:"/Accessories",element:Object(u.jsx)(je,{isLoading:r})}),Object(u.jsx)(b.a,{path:"/Favourites",element:Object(u.jsx)(be,{isLoading:r})}),Object(u.jsx)(b.a,{path:"/Shopping",element:Object(u.jsx)(ue,{isLoading:r})}),Object(u.jsx)(b.a,{path:"/Menu",element:Object(u.jsx)(_e,{isLoading:r})}),Object(u.jsx)(b.a,{path:"*",element:Object(u.jsx)(me,{})})]}),Object(u.jsx)(h,{})]})},Oe=c(12),xe=c(16),ve=c(41),Ne=c.n(ve),fe=Object(Oe.b)({favourites:S,cart:R}),ge={key:"root",storage:Ne.a},ye=Object(xe.g)(ge,fe),we=Object(E.a)({reducer:ye,middleware:function(e){return e({serializableCheck:{ignoredActions:[xe.a,xe.f,xe.b,xe.c,xe.d,xe.e]}})}}),ke=Object(xe.h)(we);r.a.render(Object(u.jsx)(o.a,{store:we,children:Object(u.jsx)(d.a,{loading:null,persistor:ke,children:Object(u.jsx)(l.a,{children:Object(u.jsx)(pe,{})})})}),document.getElementById("root"))}]),[[86,1,2]]]);
//# sourceMappingURL=main.afaa79ef.chunk.js.map