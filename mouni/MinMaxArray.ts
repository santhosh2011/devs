const arr6 = [6, 7, 11, 4, 5, 21, 67, 24];
let max6 = arr6[0];
let min6 = arr6[0];

for (let i = 1; i < arr6.length; i++) {
  if (arr6[i] > max6) {
    max6 = arr6[i];
  }
  if (arr6[i] < min6) {
    min6 = arr6[i];
  }
}
console.log('MAXIMUM ELEMENT:', max6);
console.log('MINIMUM ELEMENT:', min6);
