import tDirective from './t-directive'
import tpDirective from './tp-directive'
import tcDirective from './tc-directive'
import tuDirective from './tu-directive'
import tlDirective from './tl-directive'

const plugin = {
  install (Vue) {
    Vue.directive('t', tDirective)
    Vue.directive('tp', tpDirective)
    Vue.directive('tc', tcDirective)
    Vue.directive('tu', tuDirective)
    Vue.directive('tl', tlDirective)
  }
}

export default plugin
