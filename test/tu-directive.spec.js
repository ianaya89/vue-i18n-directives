/* global describe it expect */

import tuDirective from '../src/tu-directive'

describe('vue-i18n-directive => directive', () => {
  it('has update method available', () => {
    expect(typeof tuDirective.update).toBe('function')
  })
})
