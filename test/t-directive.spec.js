/* global describe it expect */

import tDirective from '../src/t-directive'

describe('vue-i18n-directive => directive', () => {
  it('has update method available', () => {
    expect(typeof tDirective.update).toBe('function')
  })
})
