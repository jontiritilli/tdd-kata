export class StringCalculator {
    Add(input: string): number {
        if (!input)
            return 0
        
        return this.Sum(input)
    }
    Sum(input: string): number {
        if (input.length < 2)
            return parseInt(input)

        const numbers = this.GetNumbersArray(input)
        
        this.ValidateNumbers(numbers)
        return numbers.reduce((acc: number, number: number): number => {
            return acc += number
            }, 0)
    }
    GetNumbersArray(input: string): number[] {
        const sanitizedInput = this.ReplaceDelimiters(input)

        const numbers = sanitizedInput.split(',').map(num => parseInt(num))
        return numbers.filter(num => num <= 1000)
    }
    ValidateNumbers(input: number[]): void {
        const negativeNumbers = input.filter(num => num < 0)
        if (negativeNumbers.length)
            throw new Error('illegal characters. ensure all values are positive integers')
    }
    ReplaceDelimiters(input: string): string {
        const isCustomDelimiter = input.startsWith('//')
        console.log({isCustomDelimiter})
        if (isCustomDelimiter) {
            const delimiter = input.slice(2, input.indexOf('\n'))
            return input.substr(3 + delimiter.length).replace(delimiter, ',')
        }
        return input.replace('\n', ',')
    }
}