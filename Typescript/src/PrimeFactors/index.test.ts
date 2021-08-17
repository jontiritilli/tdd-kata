import { primeFactors } from './index'
describe('prime factors kata', () => {
  it('should return [] for 1', () => {
    expect(primeFactors(1)).toEqual([])
  })
  it('should return [2] for 2',  () => {
    expect(primeFactors(2)).toEqual([2])
  })
})