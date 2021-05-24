// console.log(firstname);

// C# is a compiled 
// Javascript is Interpreted language

// var firstname = 'Samir';
// var firstname = 'Agil';

// let firstname = 'Samir';
// let firstname = 5;

// const PI = 3.14;
// PI = 5.55;


// console.log(PI);

// let number = 50000;

// console.log(number);

// if (number > 100) {
//     alert('number is greater than 100');
// }


// let number = 5; // number 
// let string = 'String' // string
// let object = {}; // object
// let something; // undefined

// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof object);
// console.log(typeof something);
// console.log(typeof typeof number);  //string


// Objects in js are reference type
// Numbers for example are value type
let object = {
    firstname: 'Agil',
    lastname: 'Atakishiyev',
    age: 30,
}

let number = 50;

let objectCopy = object;
let numberCopy = 50;

// numberCopy = 100;
// objectCopy.firstname = 'Eflatun';

number = 100;
object.firstname = 'Eflatun';

// console.log(objectCopy); // Eflatun
// console.log(numberCopy); // 50 

// console.log(object);
// console.log(number);

const canConfirm = true;
// console.log(canConfirm);

// alert('salam dunya');

// const result = prompt('Are you cola?');

// const firstNum = prompt('Enter a number'); // string
// const secondNum = prompt('Enter second number'); // string

// alert(+firstNum + +secondNum);

// const isOlderThanEighteen = confirm('Are you really older than 18?');

// if (isOlderThanEighteen) {
//     alert('you can pass');
// } else {
//     alert('you can\'t pass');
//     // alert(`you can't pass`); // Backtick - on the left side of the number 1 key
//     // alert("you can't pass");
// }

// Some default browser helper windows (prompt, alert, confirm)

// const number2 = 50;

// if (number > 30) {
//     console.log('number is greater than 30');
// } else if (number > 25) {
//     console.log('number is greater than 25');
// } else {
//     console.log('number is lesser than 30');
// }

// const character = 100;

// switch (character) {
//     case 'A':
//         console.log('character is A');
//         break;
//     case 'B':
//         console.log('character is B');
//         break;
//     case 100:
//         console.log('character is a number : 100')
//         break;
//     default:
//         console.log('i could not see what the character is')
//         break;
// }

// try {
//     console.log(eflatun);
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log('finally finished the execution');
// }

// const str = prompt('Please enter a usernam');

// try {
//     if (str === '') {
//         throw 'input is empty';
//     }

//     if (str.length < 10) {
//         throw 'length is less than 10';
//     }

//     if (str.length > 20) {
//         throw 'length is greater than 20';
//     }

//     alert('you did a great job');
// } catch (error) {
//     console.log(error);
// } finally {
//     alert('you finished sign up');
// }

// == : only checks variables value
// === checks value and type

// Falsy values : 0, empty string
// Truthy values : Any number, string with even one space character, empty array, empty object

// if (false) {
//     console.log('truthy');
// } else {
//     console.log('falsey');
// }

// && ||

// '' && console.log('first');
// 1 && console.log('second');
// (5 || '') && console.log('third');
// false || console.log('fourth');
// 5 == true && console.log('fifth');
// 0 === false || console.log('sixth1') && console.log('sixth2');

const array = [1, 23, 4, '', { firstname: 'Samir' }, []];

for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

let counter = 0;
while (counter < array.length) {
    console.log(array[counter]);
    counter++;
}

const arr = [1, 23, 4, 5, [5, 23, 4, 5, 6, [12, 32, 42, 34], [124, 345, 12, 200, 400]], [45, 234, 100]];


const arrResult = [];
function flattenArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            arrResult.push(array[i]);
        } else {
            flattenArray(array[i]);
        }
    }
    return arrResult;
}


flattenArray(arr);