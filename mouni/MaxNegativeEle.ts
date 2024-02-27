const arr2 = [-6, -4, -9, -12, -20];
let max2 = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max2) {
    max2 = arr2[i];
  }
}

console.log('Maximum Negative element:', max2);
