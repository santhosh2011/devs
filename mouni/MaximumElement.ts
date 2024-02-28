// const arr = [6, 7, 11, 4, 2, 217, 67, 0, 24];

export function maxElement(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
