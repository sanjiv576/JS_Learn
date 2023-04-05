

let arr = ['red', 'green', 'blue'];
arr[3] = 10;
arr.push('pink');

console.log(typeof (arr));
console.log(arr);


console.log((4 % 2 == 0) ? 'even' : 'odd');

// swapping 
let color1 = 'red';
let color2 = 'green';

let swapValue = color1;

color1 = color2;
color2 = swapValue;

console.log(color1);
console.log(color2);

// max of two numbers

const getMax = (firstNum, secondNum) => (firstNum > secondNum) ? firstNum : secondNum;
console.log(getMax(30, 36));

// is landscape if width is greater than height


console.log(isLandscaped(60, 45));
function isLandscaped(width, height) { return width > height }


// FizzGame,  Fizz --> divisible by 3, Buzz --> divisible by 5, FizzBuzz --> divisible by both 3 and 5
// return the same number if it is neither divisbile by 3 and 5


const fizzBuzzGame = function (num){
    if(typeof(num) !== 'number') return NaN;
    else if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if(num % 3 === 0) return 'Fizz';
    else if(num % 5 === 0) return 'Buzz';
    else return num;
};

console.log(fizzBuzzGame(9));
console.log(fizzBuzzGame(15));
console.log(fizzBuzzGame(20));
console.log(fizzBuzzGame(true));  // should be NaN beacuse it is Not A Number
console.log(fizzBuzzGame(7));



