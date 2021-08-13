import { generate } from './index'

describe('prime factor generator',  () => {
    it('should return an empty array for 1', () => {
        const result = generate(1)
        expect(result).toEqual([])
    })
    it('should return [2] for 2', () => {
        const result = generate(2)
        expect(result).toEqual([2])
    })
})