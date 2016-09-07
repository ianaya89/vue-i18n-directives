export default {
  update(val) {
    this.el.innerHTML += this.vm.$t(val);
  }
};
