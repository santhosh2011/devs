let a = [6, 7, 11, 4, 2, 21, 67, 0, 24];

for (let i=0; i<a.length/2; i++){
  let temp = a[i];
  a[i]= a[a.length-1-i];
  a[a.length-1-i]= temp;
} console.log(a);
