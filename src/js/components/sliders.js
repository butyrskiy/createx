// import Swiper from "swiper";

// import { Navigation, Pagination, 
//   Scrollbar } from 'swiper/modules';

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

const portSlider = document.querySelector('.portfolio-section__items')

const portfolioSlider = new Swiper(portSlider, {
  // modules: [Navigation, Pagination, 
  //   Scrollbar],
  slidesPerView: 3,
  spaceBetween: gap,
  on: {
    'init': function() {

      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      
      const nextElementSlide = activeSlide.nextElementSibling;
      
      const nextNextElementSlide = nextElementSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextElementSlide.classList.add('slider-visible');
      nextNextElementSlide.classList.add('slider-visible');
    }
  },
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
});

portfolioSlider.on('slideChange', function() {
  const activeSlide = portSlider.querySelector('.swiper-slide-next ');
      
  const nextElementSlide = activeSlide.nextElementSibling;
  
  const nextNextElementSlide = nextElementSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  });

  activeSlide.classList.add('slider-visible');
  nextElementSlide.classList.add('slider-visible');
  nextNextElementSlide.classList.add('slider-visible');
});