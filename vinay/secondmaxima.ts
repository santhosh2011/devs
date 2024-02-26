// @ts-ignore

let x=[1,2,3,4,5,6,7,8,7,6,6,2];
let l= x.length;
let max=x[0];
let secondmax =x[0];
for(let i=0;i<l;i++) {
  if (x[i] > max) {
    secondmax = max;
    max = x[i];
  } else if (x[i] > secondmax) {

    secondmax = x[i];
  }
}

console.log(secondmax);