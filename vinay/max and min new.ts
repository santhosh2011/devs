let x=[1,3,2,5,0,7];
let l=x.length;
let min =x[0];
let max =x[0];
for (let i=1; i<l; i++){
  if(x[i]<min){
    min=x[i];
  }

  if(x[i]>max) {
    max =x[i];
  }
}
console.log(min);
console.log(max);
