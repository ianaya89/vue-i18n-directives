import translate from './t-directive'
import translatePlaceholder from './tp-directive'
import translateCapitalize from './tc-directive'
import translateUpper from './tu-directive'
import translateLower from './tl-directive'
import translateReset from './tr-directive'

export { translate }
export { translatePlaceholder }
export { translateCapitalize }
export { translateUpper }
export { translateLower }
export { translateReset }

const plugin = {
  install (Vue) {
    Vue.directive('t', translate)
    Vue.directive('tp', translatePlaceholder)
    Vue.directive('tc', translateCapitalize)
    Vue.directive('tu', translateUpper)
    Vue.directive('tl', translateLower)
    Vue.directive('tr', translateReset)
  }
}

export default plugin
