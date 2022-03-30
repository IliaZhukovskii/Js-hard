'use strict';

let arr = ['25', '302', '47', '444', '123', '675', '555'];
let num = [];
for (let i = 0; i < arr.length; i++){
  if(arr[i][0] == 2 || arr[i][0] == 4){
    num.push(arr[i]);
  }
}
console.log("Числа, начинающиеся с цифры 2 и 4: " + num);


 
nextPrime:
for (let i = 2; i <= 100; i++) { 
 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }
 
  console.log( i + " - Делители этого числа: 1 и " + i); // простое число
}

