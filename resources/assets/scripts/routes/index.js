import Swiper from 'swiper'

export default {
  init() {

    let homeProducts = new Swiper('.home-products', {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      },
      breakpoints: {
        1024: {
          slidesPerView: 2.7,
          simulateTouch: false,
        },
      },
    });
    document.querySelectorAll('.swiper-slide').forEach(
      slide => slide.addEventListener('click', function () {
        if (this.classList.contains('swiper-slide-prev'))
          homeProducts.slidePrev();
        if (this.classList.contains('swiper-slide-next'))
          homeProducts.slideNext();
      })
    )
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
