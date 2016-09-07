import tDirective  from './t-directive';
import tpDirective from './tp-directive';

export default Vue => {
  Vue.directive('t',  tDirective);
  Vue.directive('tp', tpDirective);
};
