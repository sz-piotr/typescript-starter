import { expect } from 'chai'
import { add } from '../src/add'

describe('add', () => {
  it('2 + 2 = 4', () => {
    expect(add(2, 2)).to.equal(4)
  })
})
