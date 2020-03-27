export default {
  init() {
    document.querySelectorAll('.btn').forEach(
      btn => btn.innerHTML = btn.innerHTML + '<svg width="22px" height="16px" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg"><g stroke="inherit" stroke-width="1" fill="none" stroke-linecap="round"><g transform="translate(1.000000, 1.000000)" stroke="inherit" stroke-width="1.5"><polyline points="12.4124355 0 19.2060059 6.79357043 12.4124355 13.5871409"></polyline><line x1="1.13686838e-13" y1="6.79357043" x2="19.2060059" y2="6.79357043"></line><line class="svg-anim" x1="1.13686838e-13" y1="6.79357043" x2="19.2060059" y2="6.79357043"></line></g></g></svg>');
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
