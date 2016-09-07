/* global Vue */
import tDirective  from './t-directive';
import tpDirective from './tp-directive';



if (!window.Vue) { throw new Error('Missing Vue dependency.'); }

Vue.use(Vue => {
  Vue.directive('t',  tDirective);
  Vue.directive('tp', tpDirective);
});

export {tDirective, tpDirective };
