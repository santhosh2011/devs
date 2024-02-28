const ar = [6, 7, 11, 4, 2, 217, 67, 0, 24];

export function reverseArray(ar: number[]): number[] {
  const n = ar.length;
  for (let i = 0; i < ar.length / 2; i++) {
    const temp = ar[i];
    ar[i] = ar[n - 1 - i];
    ar[n - 1 - i] = temp;
  }
  return ar;
}

console.log('Reversed array:', ar);
