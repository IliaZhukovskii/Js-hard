'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let date = new Date();
let day = date.getDay();

for (let key of week) {

  if (key === week[day]) {
    key = "<b>" + key + "</b>";
  } else if (key === 'Суббота' || key === 'Воскресенье') {
    key = "<i>" + key + "<i>";
  }

  document.write(key + "<br>");
}