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
})