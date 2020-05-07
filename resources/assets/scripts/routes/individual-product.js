import Swiper from 'swiper'
import 'foundation-sites/dist/js/plugins/foundation.tooltip.min'
import 'foundation-sites/dist/js/plugins/foundation.accordion.min'

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    let sliderThumbs = new Swiper('.single-product__thumbs', {
      slidesPerView: 3.5,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 4.5,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });

    // eslint-disable-next-line no-unused-vars
    let productSlider = new Swiper('.single-product__slider', {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      simulateTouch: false,
      thumbs: {
        swiper: sliderThumbs,
      },
     });

    // eslint-disable-next-line no-unused-vars
    let bottomSlider = new Swiper('.product-related__container', {
      slidesPerView: 1.3,
      loop: true,
      centeredSlides: true,
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
    $(document).foundation();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
