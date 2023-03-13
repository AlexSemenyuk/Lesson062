'use strict';
// Исходные данные
// Вариант - 1 (Нечетное кол-во)
let line1 = "Don't Be Evil";
console.log(line1.length);
let fontHeight1 = 10;
let fontStep1 = 5;


// Вариант - 2 (Четное кол-во)
let line2 = "Hello World!";
console.log(line2.length);
let fontHeight2 = 10;
let fontStep2 = 5;


const body = document.body;
const div1 = document.createElement('div');
body.append(div1);
const div2 = document.createElement('div');
body.append(div2);

wordWithDifferentFontSize(line1, fontHeight1, fontStep1, div1);
wordWithDifferentFontSize(line2, fontHeight2, fontStep2, div2);

function wordWithDifferentFontSize(word, startHeight, step, element) {
    const arrSpan = [word.length];
    for (let i = 0; i < word.length; i++) {
        arrSpan[i] = document.createElement('span');
        element.append(arrSpan[i]);
        arrSpan[i].append(document.createTextNode(`${word[i]}`));
        if (i === 0) {
            arrSpan[i].style.fontSize = startHeight + 'px';
        } else if (word.length % 2 === 0) {
            if (i <= word.length / 2 - 1) {
                startHeight += step;
                arrSpan[i].style.fontSize = startHeight + 'px';
            } else if (i === word.length / 2) {
                arrSpan[i].style.fontSize = startHeight + 'px';
            } else {
                startHeight -= step;
                arrSpan[i].style.fontSize = startHeight + 'px';
            }
        } else {
            if (i <= word.length / 2) {
                startHeight += step;
                arrSpan[i].style.fontSize = startHeight + 'px';
            } else {
                startHeight -= step;
                arrSpan[i].style.fontSize = startHeight + 'px';
            }
        }
    }
}