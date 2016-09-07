import tDirective  from './t-directive';
import tpDirective from './tp-directive';

function install(Vue) {
  if (!Vue) { throw new Error('Missing Vue dependency.'); }

  Vue.use(Vue => {
    Vue.directive('t',  tDirective);
    Vue.directive('tp', tpDirective);
  });
}

export default install;
