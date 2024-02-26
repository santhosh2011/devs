const num = [6, 7, 11, 4, 2, 10];
const k = num.length;
let temp1 = 0;
for (let i = 0; i < k; i++) {
  for (let j = i + 1; j < k; j++) {
    if (num[i] > num[j]) {
      temp1 = num[i];
      num[i] = num[j];
      num[j] = temp1;
    }
  }
}
console.log('Sorted Array:', num);
