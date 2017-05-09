function translate (el, binding, vnode) {
  const vm = vnode.context
  if (vm.i18n === false) { return binding.value }

  const text = vm.$t ? vm.$t(binding.value) : binding.value
  el.innerText = text
}

export default {
  bind: translate,
  update: translate
}
