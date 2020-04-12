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
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
