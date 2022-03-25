let num = 266219;

let newNum = num.toString();
let rez1 = newNum.split('').reduce(function(acc, item){
return acc = acc * item}, 1);
console.log("Результат произведения цифр:  " + rez1 );

let rez2 = rez1 ** 3;

let rez3 = rez2.toString();
console.log("Первый две цифры раннее поллученного числа  " + rez2 + " такие: " + rez3.substring(0, 2));



