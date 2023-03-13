'use strict';
// Вариант 1
document.getElementById(`stars`).childNodes[2].src = `icons/star_on.png`;
// Индекс 1 или 3 плавает в зависимости от записи
// ЗАПИСЬ 1 (индекс 1) - если в теги записаны в строку без пробелов
// <span id="stars"><img id="img1" src="icons/star_off.png" width="50px"><img src="icons/star_off.png"  width="50px"><img src="icons/star_off.png" width="50px"></span>
// ЗАПИСЬ 2  (индекс 3)- мешает #text, который образовывается из-за пробелов
// <span id="stars">
//     <img id="img1" src="icons/star_off.png" width="50px">
//     <img src="icons/star_off.png" width="50px">
//     <img src="icons/star_off.png" width="50px">
// </span>

// Если на .childNodes использовать циклы
const arr = document.getElementById(`stars`).childNodes;

let count = 0;
// for (let value of arr) {         // for of - получаем только значения (но как найти 2 элемент)
//
//     if (count === 1) {           // Для 2 элемента count равен 1 и 3 (в зависимости от записи) - не годится
//         value.src = `icons/star_on.png`;
//     }
//     count ++;
// }

// for (let idx in arr) {              // По индексам не работает
//     if (idx === 2) {
//         arr[i].src = `icons/star_on.png`;
//     }
//     console.log(idx);
// }

// for (let i = 0; i < arr.length; i++) {
//     if  (i === 3){                       // Для 2 элемента i равен 1 и 3 (в зависимости от записи) - не годится
//         arr[i].src = `icons/star_on.png`;
//     }
// }

// ИТОГО: так писать нельзя
// Вариант 2
// document.getElementById(`stars`).children[1].src = `icons/star_on.png`; // Тут все ок

