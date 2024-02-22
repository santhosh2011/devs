let num = [6, 7, 11, 4, 2, 10];
let l = num.length;
let temp1 = 0;
for (let i = 0; i < l; i++) {
  for (let j = i + 1; j < l; j++) {
    if (num[i] > num[j]) {
      temp1 = num[i];
      num[i] = num[j];
      num[j] = temp1;
    }
  }
}
console.log(num[0]);
console.log(num[l-1]);