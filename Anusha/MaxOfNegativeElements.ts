let a = [-6, -4, -9, -12, -20];
let max = a[0];

for (let i = 1; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}

console.log('neg element:', max);
