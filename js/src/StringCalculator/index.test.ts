import { StringCalculator } from './index'
const _calculator: StringCalculator =  new StringCalculator()

describe('String Calculator test kata', (): void => {
    test('Returns 0 with empty string', () => {
        const result = _calculator.Add('')
        expect(result).toBe(0)
    })
    test('single number returns the value', () => {
        const result = _calculator.Add('1')
        expect(result).toBe(1)
    })
    test('Two numbers, comma delimited, returns the sum', () => {
        const result = _calculator.Add('1,2')
        expect(result).toBe(3)
    })
    
    test('Two numbers, newline delimited, returns the sum', () => {
        const result = _calculator.Add('1,2')
        expect(result).toBe(3)
    })
})