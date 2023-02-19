// let array = [1, 56, 3, 0, -34];
// let string = ['Toyota Yaris']

// console.log(array.length);
// console.log(string.length);
// console.log(array[3]);
// console.log(string[3]);

// array[0] = 99;
// console.log(array);

// string[0] = 'G';
// console.log(string);

// let newString = string[0];
// console.log(newString);


// console.log(array.indexOf(563));
// console.log(string.indexOf('y'));

// console.log(string.toUpperCase());
// console.log(string);

// console.log(string.toLowerCase());
// console.log(string);

// let longString = 'Hello World';
// // let sliceString = longString.slice(6);
// // let sliceString = longString.slice(11, 6);
// let sliceString = longString.substring(11, 6);

// console.log(sliceString);

// console.log(sliceString.substr(1, 3));

// console.log(array.slice(1, 3));

// console.log(longString.indexOf('World'));

// console.log(longString.includes('World'));
// console.log(longString.includes('world'));



/*
Задание 1

Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
Вам понадобятся методы строк.
*/

function ucFirst(str){
    
    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("abaabab"))
console.log(ucFirst("rthgfhsg"))

/*
Задание 2

Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру.
*/

function checkSpam(str){
    if(str.toLowerCase().includes('badWord'.toLowerCase()) || str.toLowerCase().includes('XXX'.toLowerCase())){
        return true
    } else{
        return false
    }
}

console.log(checkSpam('XXX'))
console.log(checkSpam('xXx'))
console.log(checkSpam('FFggfagda'))

// const sampleArray = [3, 57, 342, -23, 0, 11];

//     sampleArray.push(22);
//     sampleArray.pop();

//     sampleArray.unshift(1);
//     sampleArray.shift();

//     sampleArray.splice(1, 0, 'new', 111 );

//     sampleArray.reverse();

//     let newArray = ['erer', 'er', '0120'];

//     let copyArray = sampleArray.concat(3, 4, newArray);

//     let result = sampleArray.join(' ')

//     console.log(result)

//     let string = 'hello friend'

//     console.log(string.split(' '))

    /*
    Задание 3
    Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
    Обратите внимание: метод reverse существует только у массивов.
    */

    function reverseString(str){
        return str.split("").reverse().join("");
    }

    console.log(reverseString('Привет Женя'))

    /*
    Задание 4
    Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
    */

    let stations = [

        'MAN675847583748sjt567654;Manchester Piccadilly',
        
        'GNF576746573fhdg4737dh4;Greenfield',
        
        'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
        
        'SYB4f65hf75f736463;Stalybridge',
        
        'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
        
    ];

    for(let item of stations){
        let thirdLetters = item.slice(0, 3)

        let index = item.indexOf(';')
        
        let stationName = item.slice(index + 1)

        let finalResult = thirdLetters + ": " + stationName

        console.log(finalResult)
    }

    /*
    Задание 5
    Напишите функцию, которая проверяет, содержит ли массив элементы, равные нулю. Если да - возвращает true.
    Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345]
    */

    function doesItContain(arr){
        if(arr.includes(0)){
            return true
        } else {
            return false
        }

    }

    console.log(doesItContain([12, 4, 50, 1, 0, 18, 40]))
    console.log(doesItContain([56, 24, -55, 2, 9, -345]))


    /*
    Задание 6
    Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
    */

    function unique(arr){
        let result = [];

        for (let str of arr) {
          if (!result.includes(str)) {
            result.push(str);
          }
        }
      
        return result;
    }

    console.log(unique(["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]))

    /*
    Задание 7
    Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
    Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
    Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
    1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
    2. Создайте общий массив с данными Жени (исправленными) и Юли.
    3. Для каждой кошки этого общего массива выведите в консоль текст:
    - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
    - если котёнок - Кошка № 2 ещё котёнок
    4. Вызовите функцию для двух наборов тестовых данных.
    */

    function verifyCats(arr1, arr2){
        let newFirstArr = arr1.slice(1, arr1.length -1)

        let normalArr = newFirstArr.concat(arr2)

        normalArr.forEach((element, index) => {
            if(element > 2){
                console.log(`Кошка №${index +1} взрослая, ей ${element} лет`)
            } else {
                console.log(`Кошка №${index +1} еще котёнок.`)
            }
        });
    }

    verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7])
    verifyCats([3, 5, 9, 14, 1, 2, 6, 8, 3, 10], [8, 2, 10, 1, 2, 5, 6, 3, 1, 4])


    // // filter

    // const numbers = [48, 124, -241, -35.7, 9, -57, 123]

    // // const arr = [54, 562.76, -412, 5432, -12456, -214, 0, 8465]

    // // const negativeNumbers = numbers.filter(function(item){
    // //     return item < 0
    // // })

    // const negativeNumbers = numbers.filter(item => item < 0)



    // console.log(negativeNumbers)

    // function getIntergers(array){
    //     const newArr = array.filter(function(item){
    //         return item % 1 == 0
    //     })

    //     return newArr
    // }

    // console.log(getIntergers(numbers))

    /*
    Задание 8

    Определить массив, например let arr = [5, 4, 3, 8, 0];
    Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
    Например, запуск функции filterFor(arr, 5) дает результат [5,8]
    апуск функции filterFor(arr, 10) дает результат []
    запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
    */

    let arr = [5, 4, 3, 8, 0]

    function filterFor(arr, a){
        let newSecondArray = arr.filter((item) => item >= a)
        return newSecondArray
    }
    console.log(filterFor(arr, 5))

    /*
    Задание 9
    Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].
    */

    const symbols = ['yes', 'hello', 'no', 'easycode', 'what']

    function getThreeSymbol(arr){
        const finalSymbols = arr.filter(item => item.length >= 3)
        return finalSymbols
    }

    console.log(getThreeSymbol(symbols))

    // // sort

    // const names = ['Anna', 'Oleg', 'Alex', 'Kate', 'Yulia']

    // const sortedNames = names.sort();

    // const sortedNums = numbers.sort((a, b) => a - b);

    // console.log(sortedNames)
    // console.log(sortedNums)

    /*
    Задание 10
    Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
    ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.
    */

    const arrayArr = [ [14, 45], [1], ['a', 'c', 'd'] ];

    const sortedArray = arrayArr.sort((a, b) => b.length - a.length)

    console.log(sortedArray)

    // //reduce

    // const reduceNumbers = [37, 777, -3, 56.87, 10]

    // // const sum = reduceNumbers.reduce(function(acc, item){
    // //     console.log(acc)
    // //     return acc + item
    // // }, 0)

    // const sum = reduceNumbers.reduce((acc, item) => acc + item, 0)

    // console.log(sum)

    // const min = reduceNumbers.reduce((acc, item) => {
    //     if(acc < item){
    //         return acc
    //     } else{
    //         return item
    //     }
    // }, reduceNumbers[0])

    /*
    Задание 11
    Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
    1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)
    2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
    3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
    Вызовите функцию для обоих наборов тестовых данных.
    Тестовые данные:
    1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
    2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
    */

    function getAverageHumanAge(arr){
        let humanAges = arr.map(item => {
            if(item <= 2){
                return item * 10
            } else{
                return item * 7
            }
        })

        let adultAges = humanAges.filter(item => item > 18)
        
        const averageAges = adultAges.reduce((acc, item) => acc + item, 0) / adultAges.length

        return averageAges
    }

    console.log(getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]))
    console.log(getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]))