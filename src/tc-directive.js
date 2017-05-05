export default {
  update (el, binding, vnode) {
    const vm = vnode.context
    if (vm.i18n === false) { return binding.value }

    let text = vm.$t ? vm.$t(binding.value) : binding.value

    if (text) {
      text = text.replace(/\w\S*/g, (txt) =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )
    }

    el.innerHTML += text
  }
}
