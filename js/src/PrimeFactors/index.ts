export const getPrimeFactors = (input: number): number[] => {
    let number = input
    const factors = []
    for (let divisor = 2; number > 1; divisor++) {
        for (; number % divisor === 0; number /= divisor) factors.push(divisor)
    }
    return factors
}