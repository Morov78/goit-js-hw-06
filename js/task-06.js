// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
const inputValidationEl = document.querySelector("#validation-input");
const classEventInputBlur = ["valid", "invalid"];

inputValidationEl.addEventListener("focus", (event) => {
  classEventInputBlur.forEach((classEvent) => {
    if (inputValidationEl.classList.contains(classEvent)) {
      inputValidationEl.classList.remove(classEvent);
    }
  });
});

inputValidationEl.addEventListener("blur", (event) => {
  const checkAttribute = Number.parseInt(
    inputValidationEl.getAttribute("data-length")
  );
  const lengthValueAttribute = inputValidationEl.value.length;
  checkAttribute === lengthValueAttribute
    ? inputValidationEl.classList.add("valid")
    : inputValidationEl.classList.add("invalid");
});
