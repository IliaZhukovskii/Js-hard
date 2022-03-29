'use strict';

let text = prompt("Введите строку");


function hard(str){
  if (typeof str !== "string") {
    alert("Это не строка!");
  }

  str = str.trim();
 
  if (str.length >= 30){
    str = str.substr(0, 30) + '...';
  }

  console.log(str);
}

hard(text);
