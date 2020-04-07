import { Foundation } from 'foundation-sites/dist/js/plugins/foundation.tabs'

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    var tabs = new Foundation.Tabs($('[data-tabs]'));
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
