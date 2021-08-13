import { getPrimeFactors } from './index'

describe('prime factor generator',  () => {
    it('should return an empty array for 1', () => {
        expect(getPrimeFactors(1)).toEqual([])
    })
    it('should return [2] for 2', () => {
        expect(getPrimeFactors(2)).toEqual([2])
    })
    it('should return [3] for 3', () => {
        expect(getPrimeFactors(3)).toEqual([3])
    })
    it('should return [2,2] for 4', () => {
        expect(getPrimeFactors(4)).toEqual([2,2])
    })
    it('should return [5] for 5', ()=>{
        expect(getPrimeFactors(5)).toEqual([5])
    })
    it('should return [2,3] for 6', ()=>{
        expect(getPrimeFactors(6)).toEqual([2,3])
    })
    // it('should return [7] for 7', ()=>{
    //     expect(getPrimeFactors(7)).toEqual([7])
    // })
    // it('should return [2,2,2] for 8', ()=>{
    //     expect(getPrimeFactors(8)).toEqual([2,2,2])
    // })
    // it('should return [3,3] for 9', ()=>{
    //     expect(getPrimeFactors(9)).toEqual([3,3])
    // })
    // it('should return [2,2,3,5,7,11] for 4620', ()=>{
    //     expect(getPrimeFactors(4620)).toEqual([2,2,3,5,7,11])
    // })
})