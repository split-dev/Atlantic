import { Foundation } from 'foundation-sites/dist/js/plugins/foundation.accordion'

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    var accordion = new Foundation.Accordion($('.accordion'));

    document.querySelector('[data-filters-clear]').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.filter-list__input').forEach(
        input => input.checked = false)
    });
  },

  finalize() {
  },
};
