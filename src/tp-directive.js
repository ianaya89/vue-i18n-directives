export default {
  update(val) {
    this.el.placeholder = this.vm.$t(val);
  }
};
