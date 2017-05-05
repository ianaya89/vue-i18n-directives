/* global describe it expect afterEach */

import tDirective from '../src/t-directive'

describe('vue-i18n-directive => directive', () => {
  afterEach(() => {
    tDirective.onEventBound = undefined
    tDirective.cb = undefined
  })

  it('has update method available', () => {
    expect(typeof tDirective.update).toBe('function')
  })
})
