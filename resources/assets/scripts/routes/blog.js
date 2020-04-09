export default {
  init() {
    document.querySelectorAll('.filter').forEach(
      btn => btn.addEventListener('click', function () {
        this.classList.toggle('active');
      })
    );
  },

  finalize() {
  },
};
