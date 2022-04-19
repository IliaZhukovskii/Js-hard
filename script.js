'use strict';

function clockTimer() {
  let clock = document.getElementById("clock");
  let dayOfWeek = document.getElementById("dayOfWeek");
  let hello = document.getElementById('hello');
  let newYear = document.getElementById('newYear');
  let newHello;

  //Рассчеты
  
  // 1. Получение текущего дня
  let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let date = new Date();
  let day = date.getDay();

  // 2. Получение текущего времени
  let time = [date.getHours(), date.getMinutes(), date.getSeconds()];

  if (time[0] < 10) {
    time[0] = "0" + time[0];
  }
  if (time[1] < 10) {
    time[1] = "0" + time[1];
  }
  if (time[2] < 10) {
    time[2] = "0" + time[2];
  }
  let currentTime = [time[0], time[1], time[2]].join(':');

  // 3. Нахождение времени суток
  if (time[0] > 6 && time[0] < 10) {
    newHello = 'Доброе утро';
  } else if (time[0] > 10 && time[0] < 17) {
    newHello = 'Добрый день';
  } else if (time[0] > 17 && time[0] < 23) {
    newHello = 'Добрый вечер';
  } else {
    newHello = 'Сейчас ночь';
  }

  // 4. Дней до нового года
  let dateStop = new Date('1 january 2023').getTime();
  let dateNiw = new Date().getTime();
  let days = Math.floor((dateStop - dateNiw) / 1000 / 60 / 60 / 24);


  //Вывод результатов
  hello.innerHTML = newHello;
  dayOfWeek.innerHTML = 'Сегодня: ' + week[day];
  clock.innerHTML = 'Текущее время: ' + currentTime + ' PM';
  newYear.innerHTML = 'До нового года осталось: ' + days + ' дней';

  setTimeout(clockTimer, 1000);
}

clockTimer();