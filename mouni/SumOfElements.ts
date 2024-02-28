export function sumArray(arr4: number[]): number {
  let sum = 0;
  for (let i = 1; i < arr4.length; i++) {
    sum += arr4[i];
  }
  return sum;
}
