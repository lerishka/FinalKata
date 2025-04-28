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