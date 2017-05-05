/* global describe it expect */

import tcDirective from '../src/t-directive'

describe('vue-i18n-directive => directive', () => {
  it('has update method available', () => {
    expect(typeof tcDirective.update).toBe('function')
  })
})
