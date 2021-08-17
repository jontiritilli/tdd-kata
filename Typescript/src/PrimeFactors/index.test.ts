import { primeFactors } from './index'
describe('prime factors kata', () => {
  it('should return [] for 1', () => {
    expect(primeFactors(1)).toEqual([])
  })
  it('should return [2] for 2',  () => {
    expect(primeFactors(2)).toEqual([2])
  })
  it('should return [3] for 3',  () => {
    expect(primeFactors(3)).toEqual([3])
  })
  it('should return [2,2] for 4',  () => {
    expect(primeFactors(4)).toEqual([2,2])
  })
})