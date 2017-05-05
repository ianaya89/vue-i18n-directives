export default {
  update (val) {
    let text = this.vm.$t ? this.vm.$t(val) : val

    if (text) {
      text = text.replace(/\w\S*/g, (txt) =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )
    }

    this.el.innerHTML += text
  }
}
