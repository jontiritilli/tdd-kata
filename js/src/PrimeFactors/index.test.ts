import { generate } from './index'

describe('prime factor generator',  () => {
    it('should return an empty array for 1', () => {
        const result = generate(1)
        expect(result).toEqual([])
    })
})