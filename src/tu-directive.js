export default {
  update(val) {
    const text = this.vm.$t ? this.vm.$t(val) : val;
    this.el.innerHTML += text.toUpperCase();
  }
};
