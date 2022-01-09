//------------- ЗАДАНИЕ №1--------------//

let a = prompt ('Введите значение:');

let b = a++;

let result = a + b;

alert (result);

console.log (typeof result)

const even = result % 2 === 0 ? 'Even' : 'Odd';
console.log (even);

let resNum = typeof result === 'number' ? 'true' : 'Упс, кажется, вы ошиблись';
console.log (resNum)

if ( result === NaN ) {
  console.log ('true')
}
else {
  console.log ('false')
}

//---------Задание №2----------//

let x = {}; 

switch (typeof x) {
    
  case 'number':
    console.log ('X - число');
    break;
  case 'string':
    console.log ('X - строка');
    break;
  case 'boolean':
    console.log ('X - логический тип');
    break;
  default :
    console.log ('X - тип данных не определен')
}

// --------Задание №3---------//

let str = 'Hello'

str = str.split("").reverse().join("");
console.log (str)

//----------Задание №4--------//

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log (getRandomInt(0,100))

// -------Задание №5--------//

const abc = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee'];
console.log (abc)

let abcSum = abc.length;
console.log (abcSum)

let index;
for (index = 0; index < abc.length; ++index) {
  console.log (abc[index]);
}

// ------Задание 6-------//
const arr = ['Aa', 'BB', 'Cc', 2, 'Ee'];

let res = arr.map(function (item, index, array) {
  return item === item++
});
console.log (res)

//---------Задание №7----------//
const arr = [ 10, 11, 20, false, 30, 'ss'];

let arrNum = arr.filter (function (index) {
return typeof index === 'number';
});
let arrBoo = arr.filter (function (index) {
return typeof index === 'boolean';
});
let arrStr = arr.filter (function (index) {
return typeof index === 'string';
});
let sumUnd = arr.length - arrNum.length;

let even = arrNum.filter (function (index) {
return index % 2 === 0;
});

let odd = arrNum.length - even.length

console.log (`Undefined: ${sumUnd} Odd: ${odd} Even: ${even.length}`)

//---------Задание №8----------//
let hwMap = new Map ();

hwMap.set ('winter', 'white');
hwMap.set (-20, 'cold');
hwMap.set ('sun', false)

for ( let [key, value] of hwMap) {
  console.log (`Ключ - ${key}, значение - ${value}`)
}
