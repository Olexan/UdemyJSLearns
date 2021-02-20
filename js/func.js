"use strict";

function calc(a, b) {
    return a * b;
}

const a = +prompt('Введіть число а', '');
document.write(`Таблиця множення на ${a}` + '<br>');

for (let i = 0; i <= 10; i++) {
    document.write(`${a} * ${i} = ` + calc(a, i));
    document.write('<br>');
}