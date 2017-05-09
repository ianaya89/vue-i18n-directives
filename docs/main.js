const messages = {
  en: {
    hi: 'Hi There 🇬🇧'
  },

  es: {
    hi: 'Hola a Todos 🇪🇸🇦🇷'
  },

  fr: {
    hi: 'Bonjour 🇫🇷'
  }
}

Vue.use(VueI18n)
Vue.use(VueI18nDirectives)

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const i18n = new VueI18n({
  locale: getParameterByName('lang') || 'en',
  messages
})

new Vue({
  el: '#app',

  directives: { t: VueI18nDirectives.translate },

  data () {
    return {
      title: 'hi'
    }
  },

  i18n
})
