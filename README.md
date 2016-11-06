# vue-i18n-directives

:flags:  Helper directives for [Vue.js](https://vuejs.org/) & [vue-i18n](https://github.com/kazupon/vue-i18n).


### Prerequisites
1. [Vue.js](https://github.com/vuejs/vue)
2. [vue-i18n](https://github.com/kazupon/vue-i18n)

### Installation
`$ npm i -S vue-i18n-directives`

### Directives
1. `v-t` => Translate and append text through element `innerHTML`.
2. `v-tp` => Translate and set text to input `placeholder`.

### Usage
`main.js`
```javascript
import Vue     from 'vue';
import VueI18n from 'vue-i18n';

import VueI18nDirectives from 'vue-i18n-directives';

Vue.use(VueI18n);
Vue.use(VueI18nDirectives);

// ...
```

`Component.vue`
```html
<script>
  export default {
    name: 'Component'
  };
</script>

<template lang='pug'>
  h1(v-t=' "user.name" ')
  input(v-tp=' "user.label" ')
</template>

```


### Development Setup

```bash
# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build
```

### TODO
1. Add unit tests
