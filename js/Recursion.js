"use strict";

// 1. Реализовать возведение в целую степень.
// Функция pow(base, exponent) с двумя параметрами должна возвращать значение base в степени exponent, вычисленное рекурсивно, где base любое число, exponent - натуральное (1, 2, 3) или *целое число(-2, -1, 0, 1, 2)).

function pow(numOne, numTwo) {
  return numTwo === 1 ? numOne : numOne * pow(numOne, numTwo - 1);
}
console.log(pow(2, 3));

// 2. Реализовать вывод в консоль скобок.
// вывод в консоль должен осуществляться внутри рекурсивной функции, соответственно, скобки будут расположены в консоли в столбик. Например, для вызова bracketWrapper(3) должно выводить:
// (
// (
// (
// )
// )
// )

const brackets = {
  value: "(",
  next: {
    value: "(",
    next: {
      value: "(",
      next: {
        value: ")",
        next: {
          value: ")",
          next: {
            value: ")",
            next: null,
          },
        },
      },
    },
  },
};

function bracketWrapper(brackets) {
  console.log(brackets.value);

  if (brackets.next) {
    bracketWrapper(brackets.next);
  }
}
bracketWrapper(brackets);

// 3. * Реализовать функцию аналог flat для массивов. (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat). Для реализации можно проверять, является ли элемент экземпляром MyArray (instanceof), и в зависимости от этого выполнять нужные действия.
const firstArray = [
  "Cat",
  "Dog",
  ["Rat", "Chiken", ["Bird", "Rabbit"], "Line"],
  "Pig",
];

console.log(firstArray instanceof Array);

const newArray = firstArray.flat(2);
console.log(newArray);
