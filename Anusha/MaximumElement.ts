let a = [6, 7, 11, 4, 2, 21, 67, 0, 24];
let max = a[0];
for (let i = 1; i < a.length; i++) {

   if (a[i] > max) {
       max = a[i];
   }
}


console.log("The maximum element of the array is:", max);