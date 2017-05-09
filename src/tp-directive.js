function translatePlaceholder (el, binding, vnode) {
  const vm = vnode.context
  if (vm.i18n === false) { return binding.value }

  let placeholder = vm.$t ? vm.$t(binding.value) : binding.value
  if (!placeholder) { placeholder = '' }

  el.placeholder = placeholder
}

export default {
  bind: translatePlaceholder,
  update: translatePlaceholder
}
