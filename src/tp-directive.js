export default {
  update (val) {
    const placeholder = this.vm.$t ? this.vm.$t(val) : val
    this.el.placeholder += placeholder
  }
}
