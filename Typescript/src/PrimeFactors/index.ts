export const primeFactors = (input: number): number[] => {
  let number = input
  const primeFactors: number[] = []
  for (let divisor = 2; number > 1; divisor++) {
    for (; number % divisor === 0; number /= divisor) primeFactors.push(divisor)
  }
  return primeFactors
}