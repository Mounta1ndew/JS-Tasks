// /*
// Задание 1

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }
// */

// let i = 0

// while (i < 3) {
//     alert( `number ${i}!` );
//     i += 1
//     }

// /*
// Задание 2

// Перепишите код с использованием тернарного оператора
// let male = true;
// let gender;
// if (male) {
// gender = 'man';
// } else{
// gender = 'woman'
// }
// */

// let male = true;

// let gender = (male === true) ? 'man' : 'woman';
// console.log(gender)

// /* Задание 3

// Задать массив логических значений (true/false). Например: const roles = [true, false, false, true, false]
// Каждое значение обозначает админ (true) или пользователь (false).
// Из этого массива сформировать массив объектов - roles, такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
// Т.е. из
// [true, false, false]
// должно получиться
// [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
// */

// const roles = [true, false, false, true, false]

// let rolesNew = []

// for (let item of roles){
//     if(item === true){
//         rolesNew.push({role: 'admin'})
//     } else {
//         rolesNew.push({role: 'user'})
//     }
// }

// // function calculateSum(number) {
// //     let sum = 0;

// //     for (let i = 0; i < number; i++){
// //         sum += 1;
// //     }

// //     return sum;
// // }

// // function showMessage() {
// //     alert('Подсчитывается другая сумма')
// // }

// // console.log(calculateSum(10));
// // showMessage();
// // console.log(calculateSum(20));

// /*
// Задание 4

// Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.
// */

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// function findPositiveNumbers(array){
//     let arr2 = []
//     for (let item of arr){
//         if (item > 0)
//         arr2.push(item)
//     }
//     return arr2
// }
// console.log(findPositiveNumbers(arr))

// /*
// Задание 5

// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']
// */

// function CreateNewArray(text, count){
//     let arr = []
//     for (let i = 0; i < count; i++){
//         arr.push(text)
//     }

//     return arr
// }
// console.log(CreateNewArray('qwe', 4))

/*
Задание 6

Определите массив, например let arr = [5, 4, 3, 8, 0].
Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.

Например, запуск функции filterFor(arr, 5) дает результат [5,8]
а запуск функции filterFor(arr, 10) дает результат []
а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
*/
let arr = [5, 4, 3, 8, 0]

function filterFor(array, a){
    let newArr = []
    for (let item of array){
        if (item >= a)
        newArr.push(item)
    }
    return newArr
}
console.log(filterFor(arr, 5))


/*
Задание 7

Написать функцию получения случайного цвета. Это будет строка вида "rgb(10,55,250)"
Здесь у вас будет две функции: одна ваша - с названием getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max.
*/

function getRandomRGB(){
    return `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomRGB())

/*
Задание 8

Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.
Примеры вызова такой функции:
getSquares(0, 100) - выведет квадраты чисел от 0 до 100
getSquares(56, 87) - выведет квадраты чисел от 56 до 87
*/

function getMadeSquare(min, max){
    for (let i = min; i <= max; i++){
        console.log(i ** 2)
    }
}

console.log(getMadeSquare(0, 100))

/*
Задание 9

Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.
Для проверки, целое ли число, вам понадобится опеатор % (подумайте, остаток от деления на какое число подойдет для вашей цели)
*/

function isInteger(x){
    return x % 1 === 0
}

console.log(isInteger(82))

/*
Задание 10

Написать функцию, которая принимает целое число n.   
Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
*/

function isNumberInteger(n){
    for(let i = 1; i <= n; i += 0.5){
        // if (i % 1 === 0){
        //     console.log(i + ' integer')
        // } else{
        //     console.log(i + ' decimal')
        // }
        let result = i % 1 === 0 ? " integer" : " decimal"
        console.log(i + result)
    }
}

isNumberInteger(24)