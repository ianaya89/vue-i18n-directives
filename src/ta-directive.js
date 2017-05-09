function translateAppend (el, binding, vnode) {
  const vm = vnode.context

  let text = vm.i18n && vm.$t ? vm.$t(binding.value) : binding.value
  if (!text) { text = '' }

  el.innerHTML += text
}

export default {
  bind: translateAppend,
  update: translateAppend
}
