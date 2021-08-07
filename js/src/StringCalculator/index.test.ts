import { StringCalculator } from './index'
const _calculator: StringCalculator =  new StringCalculator()

describe('String Calculator test kata', (): void => {
    test('Returns 0 with empty string', (): void => {
        const result = _calculator.Add('')
        expect(result).toBe(0)
    })
})