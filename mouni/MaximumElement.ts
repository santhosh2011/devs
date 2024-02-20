const arr = [6, 7, 11, 4, 2, 217, 67, 0, 24];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log('MAXIMUM ELEMENT:', max);
