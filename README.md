# vue-i18n-directives

> :flags:  Helper directives for [Vue.js](https://vuejs.org/) & [vue-i18n](https://github.com/kazupon/vue-i18n).

### Support
* Vue.js 2 ➡️ `vue-i18n-directives@>=2.0.0` [master]
* Vue.js 1 ➡️ `vue-i18n-directives@>=1.0.0`

### Prerequisites
1. [Vue.js](https://github.com/vuejs/vue)
2. [vue-i18n](https://github.com/kazupon/vue-i18n)

### Installation
`$ npm i -S vue-i18n-directives`

`$ yarn add vue-i18n-directives`

### Directives
1. `v-t`  ➡️ Translate and set text through element `innerText`.
1. `v-ta` ➡️ Translate and append text through element `innerText`
2. `v-tp` ➡️ Translate and set text to input `placeholder`.
3. `v-tc` ➡️ Translate and set capitalized text through element `innerText`.
4. `v-tu` ➡️ Translate and set uppercased text through element `innerText`.
5. `v-tl` ➡️ Translate and set lowercased text through element `innerText`.

### Usage
```javascript
// main.js
import Vue     from 'vue';
import VueI18n from 'vue-i18n';

import VueI18nDirectives from 'vue-i18n-directives';

Vue.use(VueI18n);
Vue.use(VueI18nDirectives);

// ...
```

```html
<script>
  // Component.vue

  export default {
    name: 'Component'
  };
</script>

<template lang="pug">
  <h1 v-t="'user.name'"></h1>      <!-- normal translation -->
  <input v-tp="user.password'"/>   <!-- placeholder translation -->

  <p v-tc="'user.jobTitle'"></p>   <!-- capitalize translation -->
  <p v-tu="'user.role'"></p>       <!-- uppercase translation -->
  <p v-tl="'user.nickname'"></p>   <!-- lowercase translation -->

  <p v-ta="'user.profile'">This will not be overwritten</p>   <!-- append translation -->
</template>

```

### Development

```bash
# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build

# docs
$ npm run docs
```

## License
[MIT License](https://github.com/ndelvalle/vue-i18n-directive/blob/master/LICENSE)

## Code Style
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)


___
**This project was built with [yeoman](http://yeoman.io/) and [generator-vue-component](https://github.com/ianaya89/generator-vue-component) ❤️**
