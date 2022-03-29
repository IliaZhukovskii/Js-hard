'use strict';

let text = prompt("Введите строку");
let newStr;

function hard(str){
  if (typeof str !== "string") {
    alert("Это не строка!");
  }

  newStr = str.trim();
 
  if (newStr.length >= 30){
    newStr = newStr.substr(0, 30) + '...';
  }
  
  console.log(newStr);
}

hard(text);
