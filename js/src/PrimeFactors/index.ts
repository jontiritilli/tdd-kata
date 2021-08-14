export const getPrimeFactors = (input: number): number[] => {
    let number = input
    const factors = []
    
    if (number > 1) {
        for (; number % 2 === 0; number /= 2) {
            factors.push(2)
        }
        if (number > 1)
            factors.push(number)
    }
    return factors
}