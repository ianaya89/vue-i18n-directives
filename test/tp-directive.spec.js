/* global describe it expect */

import tpDirective from '../src/t-directive'

describe('vue-i18n-directive => directive', () => {
  it('has update method available', () => {
    expect(typeof tpDirective.update).toBe('function')
  })
})
