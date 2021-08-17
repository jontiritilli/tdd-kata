export const primeFactors = (input: number): number[] => {
  let number = input
  const primeFactors: number[] = []
  if (number > 1) {
    for (; number % 2 === 0; number /= 2) {
      primeFactors.push(2)
    }
    if (number > 1) primeFactors.push(number)
  }
  return primeFactors
}