export class StringCalculator {
    Add(input: string): number {
        if (!input)
            return 0
        
        return this.Sum(input)
    }
    Sum(input: string): number {
        if (input.length < 2)
            return parseInt(input)

        return input.split(',')
            .reduce((acc: number, number: string): number => {
                return acc += parseInt(number)
            }, 0)
    }
}