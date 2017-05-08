function translatePlaceholder (el, binding, vnode) {
  const vm = vnode.context
  if (vm.i18n === false) { return binding.value }

  const placeholder = vm.$t ? vm.$t(binding.value) : binding.value
  el.placeholder = placeholder
}

export default {
  bind: translatePlaceholder,
  update: translatePlaceholder
}
