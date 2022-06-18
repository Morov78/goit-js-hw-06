// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів
//  в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку
// Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй
//  готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector("#controls input");
const createButtonEl = document.querySelector("button[data-create]");
const destroyButtonEl = document.querySelector("button[data-destroy]");
const listBoxesEl = document.querySelector("#boxes");
let sideLength = 30;

function createBoxes(value) {
  for (let i = 0; i < value; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = sideLength + "px";
    divEl.style.height = sideLength + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    listBoxesEl.append(divEl);
    sideLength += 10;
  }
}

function destroyBoxes() {
  listBoxesEl.innerHTML = "";
  sideLength = 30;
}

createButtonEl.addEventListener("click", () => {
  createBoxes(inputNumberEl.value);
});

destroyButtonEl.addEventListener("click", destroyBoxes);
