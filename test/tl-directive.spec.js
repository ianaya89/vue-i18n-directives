/* global describe it expect */

import tlDirective from '../src/t-directive'

describe('vue-i18n-directive => directive', () => {
  it('has update method available', () => {
    expect(typeof tlDirective.update).toBe('function')
  })
})
