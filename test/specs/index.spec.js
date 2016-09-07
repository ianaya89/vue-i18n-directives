/* global window describe it beforeEach assert */

import i18nService from '../../src';

const ES = 'es';
const EN = 'en';

describe('Service -> i18n', () => {

  beforeEach(() => {
    window.localStorage.clear();
  });

  describe('setLanguage(lang)', () => {
    it('should return and set given language', () => {
      const lang = i18nService.setLanguage(ES);

      assert.equal(lang, ES);
      assert.equal(window.localStorage.lang, ES);
    });

    it('should return and set default language', () => {
      const lang = i18nService.setLanguage();

      assert.equal(lang, EN);
      assert.equal(window.localStorage.lang, EN);
    });
  });

  describe('getLanguage()', () => {
    it('should return language from memory', () => {
      i18nService.selectedLanguage = EN;

      assert.equal(i18nService.getLanguage(), EN);
    });

    it('should return language from local storage', () => {
      i18nService.selectedLanguage = null;
      window.localStorage.lang = ES;

      assert.equal(i18nService.getLanguage(), ES);
    });

    it('should return language from default value', () => {
      i18nService.selectedLanguage = null;

      assert.equal(i18nService.getLanguage(), EN);
    });
  });

});
