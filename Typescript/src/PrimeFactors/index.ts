export const primeFactors = (input: number): number[] => {
  const primeFactors: number[] = []
  if (input < 2) return primeFactors
  primeFactors.push(input)
  return primeFactors
}