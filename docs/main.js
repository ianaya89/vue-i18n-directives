/* globals Vue VueI18n VueI18nDirectives */

const messages = {
  en: {
    hi: 'hi there 🇬🇧'
  },

  es: {
    hi: 'hola a todos 🇪🇸🇦🇷'
  },

  fr: {
    hi: 'bonjour 🇫🇷'
  }
}

Vue.use(VueI18n)
Vue.use(VueI18nDirectives)

function getParameterByName (name, url) {
  url = url || window.location.href

  name = name.replace(/[\[\]]/g, '\\$&') // eslint-disable-line
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)

  if (!results) { return null }
  if (!results[2]) { return '' }

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

const i18n = new VueI18n({
  locale: getParameterByName('lang') || 'en',
  messages
})

new Vue({ // eslint-disable-line no-new
  el: '#app',

  directives: {
    t: VueI18nDirectives.translate,
    tl: VueI18nDirectives.translateLower,
    tu: VueI18nDirectives.translateUpper,
    tp: VueI18nDirectives.translatePlaceholder,
    tc: VueI18nDirectives.translateCapitalize
  },

  data () {
    return {
      title: 'hi'
    }
  },

  i18n
})
