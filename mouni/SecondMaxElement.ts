const arr1 = [6, 7, 11, 4, 2, 21, 67, 0, 24];

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

console.log('Second max element:', second_max);
