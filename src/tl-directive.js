function translateLower (el, binding, vnode) {
  const vm = vnode.context
  if (vm.i18n === false) { return binding.value }

  let text = vm.$t ? vm.$t(binding.value) : binding.value
  if (!text) { text = '' }

  el.innerText = text.toLowerCase()
}

export default {
  bind: translateLower,
  update: translateLower
}
