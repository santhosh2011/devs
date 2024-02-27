let x=[15,12,26,2,0,19,92,19,94];
let l=x.length;
for (let i=0;i<l/2; i++){
  let temp =x[i];
  x[i]=x[l-i-1];
  x[l-i-1]=temp;
}
console.log(x);