export function secondMax(arr1: number[]): number {
  let max1 = arr1[0];
  let second_max = arr1[0];
  const len = arr1.length;
  for (let i = 1; i < len; i++) {
    if (arr1[i] > max1) {
      second_max = max1;
      max1 = arr1[i];
    } else if (arr1[i] > second_max) {
      second_max = arr1[i];
    }
  }
  return second_max;
}
