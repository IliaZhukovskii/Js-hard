'use strict';

let quest = confirm("Продолжить на русском языке?");
let lang;
if( quest == true){
   lang = "ru";
}else{
   lang = "en";
}


if(lang == "ru"){
  console.log("if:  Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Вокресенье");
}else{
  console.log("if:  Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}


switch (lang){
  case "ru":
    console.log("switch:  Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Вокресенье");
    break;
  case "en":
    console.log("switch:  Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");  
    break;
}


let namePerson = prompt("Введите имя");

let message = 
(namePerson == 'Артем') ? "директор" : 
(namePerson == 'Александр') ? "преподаватель" : 
"студент";

console.log(message);