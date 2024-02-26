let x=[1,3,2,5,0,7];
let l=x.length;

for (let i=0; i<l; i++){
  for (let j=i+1; j<l; j++){
    if (x[i]>x[j]){
      let temp =x[i];
      x[i]= x[j];
      x[j]=temp;

    }
  }
}
console.log(x);