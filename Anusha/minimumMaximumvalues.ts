let a = [10,11,2,0,9,-1,2]
let max = a[0];
let min = a[0];

for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
        if (a[i] < min) {
            min = a[i];
        }
    }

    console.log(min,max);