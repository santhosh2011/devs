let x= [0,34,-34,36,1,,2];
let l=x.length;
let max =x[0];
for (let i=0; i<l; i++){
  if (max < x[i]){
    max =x[i];
  }
}
console.log(max);