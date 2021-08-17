import { primeFactors } from './index'
describe('prime factors kata', () => {
  it('should return [] for 1', () => {
    expect(primeFactors(1)).toEqual([])
  })
})