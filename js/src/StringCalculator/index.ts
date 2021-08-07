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
        return numbers.reduce((acc: number, number: number): number => {
                return acc += number
            }, 0)
    }
    GetNumbersArray(input: string): number[] {
        input = input.replace('\n', ',')
        const numbers = input.split(',').map(num => parseInt(num))
        return numbers
    }
}