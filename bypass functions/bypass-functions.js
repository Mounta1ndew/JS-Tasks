/*
Задание 1

Написать функцию, которая принимает два параметра и складывает их.
Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
*/

let by = function (a, b){
    if(typeof a === 'undefined' || typeof b === 'undefined'){
        console.log('Введите два параметра')
    } else if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('Введенные данные не являются числами')
    } else{
        return a + b
    }
}


by("dsf", 4)
by(`1`)
console.log(by(144, 234))


/*
Задание 2

Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
"Функция "square" не может быть вызвана без аргумента"
*/

function square(a) {
    if(typeof a === 'undefined'){
    console.error('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
    } else{
        console.log(a * a)
    }
}
  
  square(10)
  
  square()

/*
Задание 3

Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
*/

function guessTheNumber(num) {
    let randomNumber = getRandomInteger(1, 10)
    
    if(num > 1 && num < 10){
        if(num === randomNumber){
            return 'Вы выиграли'
        } else{
            return `Вы не угадали, ваше число - ${num}, а выпало число ${randomNumber}`
        }
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(guessTheNumber(9))

/*
Задание 4

Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
*/

let arr = [5, 4, 3, 8, 0]

function filterFor(arr, a){
    let newArr = []
    for(let item of arr){
        if(a <= item){
            newArr.push(item)
        }
    }

    return newArr
}

console.log(filterFor(arr, 0))

const names = ['Text', 'Text2', 'Text3', 'Text4']
const newNames = []


names.forEach(function(element, index){
    console.log(`Элемент ${element}, индекс: ${index}`)
    newNames.push(element + ' молодец!')
})

names.forEach(item => newNames.push(item + "!"));

console.log(newNames)

const newArray = names.map(function(item){
    return item + ' map';
}) 

const namesLength = names.map(item => item.length);

console.log(newArray)
console.log(namesLength)

/*
Задание 5

Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
*/

const arr2 = names.map(function(item){
    return item
})

console.log(arr2)

/*
Задание 6

Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
*/

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }

function sumObjectValues(obj){
    let sumNum = 0;
    
    for (let property in obj){
        if (typeof obj[property] === 'number'){
            sumNum = obj[property] + sumNum;
        }
    }
    return sumNum
}

console.log(sumObjectValues(objectWithNumbers))