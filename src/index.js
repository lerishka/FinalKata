import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'normalize.css';
import '../src/styles/main.scss'

let swiperBrands;

function initSwiperBrands () {
swiperBrands = new Swiper ('.swiper-brands', {

  modules: [ Pagination ],

  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-brands__pagination',
    clickable: true,
  },

});
}

if (window.innerWidth < 768) {
  initSwiperBrands();
}


window.addEventListener ('resize', function(){
  
  if(window.innerWidth >= 768) {

    if(swiperBrands) {
    swiperBrands.destroy();
    swiperBrands = null;
    }

  } else {
    if (!swiperBrands){
      initSwiperBrands ();
    }
  }
})

const showMoreBrands = document.querySelector('.swiper-brands__show-more');
let noneSlidesBrands = document.querySelectorAll('.slide-none-brand');
let isEmptyBrands = false;

showMoreBrands.addEventListener('click', function () {

  if(isEmptyBrands === true) {
    noneSlidesBrands.forEach (function(noneSlidesBrands) {
      noneSlidesBrands.classList.add('slide-none-brand')
    })
    isEmptyBrands = false;
  
  
  } else {
    noneSlidesBrands.forEach (function(noneSlidesBrands) {
      noneSlidesBrands.classList.remove('slide-none-brand')
    })
    isEmptyBrands = true;
}

  if (showMoreBrands.textContent === 'Показать все') {
    showMoreBrands.textContent = 'Скрыть';
    showMoreBrands.classList.add('moved');
  } else {
    showMoreBrands.textContent = 'Показать все';
    showMoreBrands.classList.remove('moved');
  }


});




















let swiperKinds;

function initSwiperKinds () {
swiperKinds = new Swiper ('.swiper-kinds', {

  modules: [ Pagination ],

  spaceBetween: 10,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-kinds__pagination',
    clickable: true,
  },

});
}

if (window.innerWidth < 768) {
  initSwiperKinds();
}


window.addEventListener ('resize', function(){
  
  if(window.innerWidth >= 768) {

    if(swiperKinds) {
      swiperKinds.destroy();
      swiperKinds = null;
    }

  } else {
    if (!swiperKinds){
      initSwiperKinds ();
    }
  }
})

const showMoreKinds = document.querySelector('.swiper-kinds__show-more');
let noneSlidesKinds = document.querySelectorAll('.slide-none-kind');
let isEmptyKinds = false;

showMoreKinds.addEventListener('click', function () {

  if(isEmptyKinds === true) {
    noneSlidesKinds.forEach (function(noneSlidesKinds) {
      noneSlidesKinds.classList.add('slide-none-kind')
    })
    isEmptyKinds = false;
  
  
  } else {
    noneSlidesKinds.forEach (function(noneSlidesKinds) {
      noneSlidesKinds.classList.remove('slide-none-kind')
    })
    isEmptyKinds = true;
}

  if (showMoreKinds.textContent === 'Показать все') {
    showMoreKinds.textContent = 'Скрыть';
    showMoreKinds.classList.add('moved');
  } else {
    showMoreKinds.textContent = 'Показать все';
    showMoreKinds.classList.remove('moved');
  }


});












let swiperServices;

function initSwiperServices () {
swiperServices = new Swiper ('.swiper-services', {

  modules: [ Pagination ],

  spaceBetween: 10,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-services__pagination',
    clickable: true,
  },

});
}

if (window.innerWidth < 768) {
  initSwiperServices();
}


window.addEventListener ('resize', function(){
  
  if(window.innerWidth >= 768) {

    if(swiperServices) {
      swiperServices.destroy();
      swiperServices = null;
    }

  } else {
    if (!swiperServices){
      initSwiperServices ();
    }
  }
});
































const main = document.querySelector ('.main');
const buttonBurger = document.querySelector('.header__button--burger');
const buttonClose = document.querySelector('.menu__header-button--close');
const menu = document.querySelector ('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');


buttonBurger.addEventListener ('click', function() {
  menu.classList.add ('menu--opened');
  main.classList.add ('main--menu-open');
  overlay.classList.add ('overlay--active');
  body.classList.add ('opened-menu');
});

function closeMenu () {
  menu.classList.remove ('menu--opened');
  main.classList.remove ('main--menu-open');
  overlay.classList.remove ('overlay--active');
  body.classList.remove ('opened-menu');
}

buttonClose.addEventListener ('click', closeMenu);
overlay.addEventListener ('click', closeMenu);



const buttonChat = document.querySelector('.menu__footer-button--chat');
const modalFeedback = document.querySelector ('.modal-feedback');
const buttonCloseModal = document.querySelector('.modal-feedback__button');
const buttonChatHead = document.querySelector('.header__button--chat');

function openFeedback (){
  modalFeedback.classList.add ('modal-feedback--opened');
  main.classList.add ('main--menu-open');
  overlay.classList.add ('overlay--active');
  body.classList.add ('opened-menu');
};

function closeFeedback () {
  modalFeedback.classList.remove ('modal-feedback--opened');
  main.classList.remove ('main--menu-open');
  overlay.classList.remove ('overlay--active');
  body.classList.remove ('opened-menu');
}

buttonChat.addEventListener ('click', openFeedback);
buttonChatHead.addEventListener ('click', openFeedback);

buttonCloseModal.addEventListener ('click', closeFeedback)
overlay.addEventListener ('click', closeFeedback)








const buttonCall = document.querySelector('.menu__footer-button--call');
const modalCall = document.querySelector ('.modal-call');
const buttonCloseModalCall = document.querySelector('.modal-call__button');
const buttonCallHead = document.querySelector('.header__button--call');

function openCall (){
  modalCall.classList.add ('modal-call--opened');
  main.classList.add ('main--menu-open');
  overlay.classList.add ('overlay--active');
  body.classList.add ('opened-menu');
};

function closeCall () {
  modalCall.classList.remove ('modal-call--opened');
  main.classList.remove ('main--menu-open');
  overlay.classList.remove ('overlay--active');
  body.classList.remove ('opened-menu');
}

buttonCall.addEventListener ('click', openCall);
buttonCallHead.addEventListener ('click', openCall);

buttonCloseModalCall.addEventListener ('click', closeCall)
overlay.addEventListener ('click', closeCall)