import { getPrimeFactors } from './index'

describe('prime factor generator',  () => {
    it('should return an empty array for 1', () => {
        const result = getPrimeFactors(1)
        expect(result).toEqual([])
    })
    it('should return [2] for 2', () => {
        const result = getPrimeFactors(2)
        expect(result).toEqual([2])
    })
    it('should return [3] for 3', () => {
        const result = getPrimeFactors(3)
        expect(result).toEqual([3])
    })
    it('should return [2,2] for 4', () => {
        const result = getPrimeFactors(4)
        expect(result).toEqual([2,2])
    })
})