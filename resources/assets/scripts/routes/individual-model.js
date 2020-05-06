import { Foundation } from 'foundation-sites/dist/js/plugins/foundation.tabs.min'
import 'lightbox2/dist/js/lightbox.min'
import Swiper from 'swiper/js/swiper.min'

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    var tabs = new Foundation.Tabs($('[data-tabs]'));

    // eslint-disable-next-line no-unused-vars
    let modelGallery = new Swiper('.model-gallery', {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      simulateTouch: true,
      navigation: {
        nextEl: '.model-gallery__arrow--right',
        prevEl: '.model-gallery__arrow--left',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      },
      breakpoints: {
        991: {
          slidesPerView: 2.5,
        },
      },
    });

    // eslint-disable-next-line no-unused-vars
    let bottomSlider = new Swiper('.product-related__container', {
      slidesPerView: 1.3,
      loop: true,
      centeredSlides: false,
      breakpoints: {
        576: {
          slidesPerView: 2.1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2.8,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      },
    });
    if (window.innerWidth > 991){
      $('.swiper-slide').on('click', function () {
        if ($(this).hasClass('swiper-slide-duplicate-prev'))
          bottomSlider.slideNext();
        else if ($(this).hasClass('swiper-slide-active'))
          bottomSlider.slidePrev();
      });
    } else {
      $('.swiper-slide').on('click', function () {
        if ($(this).hasClass('swiper-slide-prev'))
          bottomSlider.slidePrev();
        else if ($(this).hasClass('swiper-slide-next'))
          bottomSlider.slideNext();
      });
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
