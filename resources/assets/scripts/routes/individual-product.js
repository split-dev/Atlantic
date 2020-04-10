import Swiper from 'swiper'
import 'foundation-sites/dist/js/plugins/foundation.tooltip'
import 'foundation-sites/dist/js/plugins/foundation.accordion'

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

    $(document).foundation();

    // eslint-disable-next-line no-unused-vars
    // var accordion = new Foundation.Accordion($('.accordion'));
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
