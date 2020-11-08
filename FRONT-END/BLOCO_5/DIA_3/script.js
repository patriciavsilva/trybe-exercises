function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

function creatDaysCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const listDays = document.createElement('li');
    listDays.innerHTML = days;
    ulDays.appendChild(listDays);
    listDays.className = 'day';

    if (days === 24 || days == 31) {
      listDays.classList.add('holiday');
    }
    if (days === 4 || days === 11 || days === 18) {
      listDays.classList.add('friday');
    }
    if (days === 25) {
      listDays.classList.add('holiday');
      listDays.classList.add('friday');
    }
  }
}
creatDaysCalendar();

function createButton(string) {
  const button = document.createElement('button');
  button.innerText = string;
  return button;
}
const buttonContainer = document.querySelector('.buttons-container');
const buttonFeriados = createButton('Feriados');
buttonFeriados.id = 'btn-holiday';
buttonContainer.appendChild(buttonFeriados);

function displayHolidays() {
  let getButtonFeriados = document.querySelector('#btn-holiday');
  let daysChangeColor = document.querySelectorAll('.holiday');

  const colorDays = 'rgb(238,238,238)';
  let newColor = '#bc4749';
  getButtonFeriados.addEventListener('click', function () {
    for (index = 0; index < daysChangeColor.length; index += 1) {
      if (daysChangeColor[index].style.backgroundColor === newColor) {
        daysChangeColor[index].style.backgroundColor = colorDays;
      } else {
        daysChangeColor[index].style.backgroundColor = newColor;
      }
    }
  });
}
displayHolidays();

function createButtonFriday(string) {
  const newButton = document.createElement('button');
  newButton.innerText = string;
  return newButton;
}
const newButtonContainer = document.querySelector('.buttons-container');
const newButton = createButtonFriday('Sexta-feira');
newButton.id = 'btn-friday';
newButtonContainer.appendChild(newButton);

function displayFridays() {
  let getButtonFridays = document.querySelector('#btn-friday');
  let daysChangeText = document.querySelectorAll('.friday');

  const changeText = 'SEXTOU o/';
  getButtonFridays.addEventListener('click', function () {
    for (index = 0; index < daysChangeText.length; index += 1) {
      if (daysChangeText[index].innerHTML !== changeText) {
        daysChangeText[index].innerHTML = changeText;
      } else {
        daysChangeText[index].innerHTML = forFridays[index];
      }
    }
  });
}
let forFridays = [4, 11, 18, 25];
displayFridays(forFridays);

function dayMouseOver() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function dayMouseOut() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  });
}

dayMouseOver();
dayMouseOut();
