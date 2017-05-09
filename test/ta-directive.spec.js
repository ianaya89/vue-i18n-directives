/* global describe it expect */

import taDirective from '../src/ta-directive'

describe('vue-i18n-directive => ta-directive', () => {
  it('has update method available', () => {
    expect(typeof taDirective.update).toBe('function')
  })
})
