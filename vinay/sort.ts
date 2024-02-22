let x=[1,3,2,5,0,7];
let l=x.length;
let min =x[0];
for (let i=1; i<l; i++){
  if(x[i]<min){
    min=x[i];
    let temp =x[0];
    x[0]=min;
    x[i]=temp;
  }
}