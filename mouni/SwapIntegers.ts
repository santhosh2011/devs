function swapArray(arr: number[], index1: number, index2: number): number[] {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
console.log(swapArray([1, 2, 3, 4, 7, 9, 6], 3, 5));

// selection_sort: using above method for swapping
function sortArray(a: number[]): number[] {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      swapArray(a, i, j);
    }
  }
  return a;
}
console.log(sortArray([1, 2, 3, 4]));
