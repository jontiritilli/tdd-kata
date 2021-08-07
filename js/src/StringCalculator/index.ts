export class StringCalculator {
    Add(input: string): number {
        if (!input)
            return 0
        
        return this.Sum(input)
    }
    Sum(input: string): number {
        if (input.length < 2)
            return parseInt(input)
        
        throw new Error('illegal input')
    }
}