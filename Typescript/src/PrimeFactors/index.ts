export const primeFactors = (input: number): number[] => {
  let number = input;
  const factors: number[] = [];
  for (let divisor = 2; number > 1; divisor++) {
    for (; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
  }
  if (number > 1) factors.push(number);
  return factors;
};
