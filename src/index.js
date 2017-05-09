import translate from './t-directive'
import translateUpper from './tu-directive'
import translateLower from './tl-directive'
import translateAppend from './ta-directive'
import translatePlaceholder from './tp-directive'
import translateCapitalize from './tc-directive'

export { translate }
export { translatePlaceholder }
export { translateCapitalize }
export { translateUpper }
export { translateLower }
export { translateAppend }

const VueI18nDirectives = {
  install (Vue) {
    Vue.directive('t', translate)
    Vue.directive('tu', translateUpper)
    Vue.directive('tl', translateLower)
    Vue.directive('tr', translateAppend)
    Vue.directive('tc', translateCapitalize)
    Vue.directive('tp', translatePlaceholder)
  }
}

export default VueI18nDirectives
