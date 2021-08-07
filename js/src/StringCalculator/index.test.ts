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
        const result = _calculator.Add('1\n2')
        expect(result).toBe(3)
    })
    test('Three numbers, delimited either way, returns the sum', () => {
        const result = _calculator.Add('1\n2, 3')
        expect(result).toBe(6)
    })
    test('Negative numbers throw an exception with the message ', () => {
        expect(() =>{_calculator.Add('1\n2, -1')}).toThrow('illegal characters. ensure all values are positive integers')
    })
    test('Numbers greater than 1000 are ignored', () => {
        const result = _calculator.Add('1\n2, 1001')
        expect(result).toBe(3)
    })
    test('number, user defined single delimited, returns a sum', () => {
        const result = _calculator.Add('//#\n1#2#1001')
        expect(result).toBe(3)
    })
    test('number, user defined multi char delimited, returns a sum', () => {
        const result = _calculator.Add('//###\n1###2###1001')
        expect(result).toBe(3)
    })
})