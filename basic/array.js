
//  -------------------------- map operation --------------------------------------

// Given an array of numbers, write a JavaScript function to return an array
//  containing the squares of each number in the original array using map() method.

const array = [12, 4, 15, 20, 11, 13];

function squareArray(arr) {
    return arr.map(element => element ** 2);
}

const newSquaredArray = squareArray(array);
console.log(newSquaredArray);

// Write a JavaScript function that takes an array of objects representing books with title and author properties, 
// and returns an array of book titles using map() method.

const booksWithAuthor = [
    {
        title: 'Half-Girlfriend',
        author: 'Chetan Bhagat'
    },
    {
        title: 'Harry Potter',
        author: 'J.K Rowling'
    },
    {
        title: 'Muna Madan',
        author: 'Laxmi Prasad Devkota'
    },
    {
        title: 'Alice in the wonderland',
        author: 'Lewis Carroll'
    },
];

function getAuthor(array){
    return array.map(element => element.author);
}

const authorsOnly = getAuthor(booksWithAuthor);
console.log(authorsOnly);

// Given an array of strings, write a JavaScript function to return 
// a new array containing the first character of each string in the original array using map() method.

const wrestlersName = ['Undertaker', 'Triple-H', 'Roman', 'Brock', 'Daniel', 'Cody'];

const fristCharacterName = (array) => array.map(item => item[0]);


console.log(fristCharacterName(wrestlersName));


// Given an array of objects representing products with their name and price, write a JavaScript function
//  that returns an array containing the prices of the products after a discount of 10% using map() method.

const pricesWithDiscount = (array) => {
    return array.map(product => product.price - (product.price * 0.1));
};


const products = [
    {
        product : 'Book',
        price : 500
    },
    {
        product : 'Pen',
        price : 10
    },
    {
        product : 'T-Shirt',
        price : 450
    },
    {
        product : 'Pant',
        price : 1200
    },
    {
        product : 'Mobile',
        price : 35000
    }
];

const discountPrices = pricesWithDiscount(products);
console.log(discountPrices);

// ------------------ filter operation --------------------------


// Given an array of objects representing different products, write a JavaScript function
//  to filter out all products that are out of stock.

const outOfStock = (array) =>{
    // store array of products those are out of stock
    const stockProducts =  array.filter(product => !product.avaiable);
    // store only name
    return stockProducts.map(product => product.productName);
};
const productWithStock = [
    {
        productName : 'Book',
        price : 500,
        avaiable : true
    },
    {
        productName : 'Pen',
        price : 10,
        avaiable : true
    },
    {
        productName : 'T-Shirt',
        price : 450,
        avaiable : true
    },
    {
        productName : 'Pant',
        price : 1200,
        avaiable : false
    },
    {
        productName : 'Mobile',
        price : 35000,
        avaiable : false
    }
];

console.log(outOfStock(productWithStock));

// Given an array of strings representing different cities, write a JavaScript function 
// to filter out all cities that start with the letter "A".
const cities =['Athens', 'Kathmandu', 'Auburn', 'New York', 'Mumbai', 'Alexandar City']

const filteredCities = (array) => {

    const citiesBeginWithA = array.filter(item => item[0] == 'A')
    return citiesBeginWithA.map(item => item)
}

console.log(filteredCities(cities))

// Given an array of objects representing different employees, write a JavaScript function
//  to filter out all employees who earn less than a certain amount, say $50,000 per year.

function highPaidEmployee(array){
    return array.filter(employee => employee.salary >= 50000)
}

const employees = [
    {
        employeeName : 'Josph',
        salary : 23493
    },
    {
        employeeName : 'John',
        salary : 1459912
    },
    {
        employeeName : 'Rock',
        salary : 89343423
    },
    {
        employeeName : 'David',
        salary : 34002312
    },
    {
        employeeName : 'Tom',
        salary : 9834224
    },{
        employeeName : 'Helica',
        salary : 1579
    }
]

console.log(highPaidEmployee(employees))

// Given an array of objects representing different employees, write a JavaScript function
// to filter out all employees whose age is greater than 30 and whose department is not 'IT'.

function ITemployees(array){
    return array.filter(employee => employee.department != 'IT' && employee.age > 30)
}
const myEmployee = [
    { name: 'Alice', age: 28, department: 'HR' },
    { name: 'Bob', age: 35, department: 'Marketing' },
    { name: 'Charlie', age: 42, department: 'IT' },
    { name: 'David', age: 29, department: 'HR' },
    { name: 'Emma', age: 32, department: 'IT' },
    { name: 'Frank', age: 31, department: 'Sales' },
    { name: 'George', age: 40, department: 'IT' },
    { name: 'Helen', age: 27, department: 'HR' },
    ];

console.log(ITemployees(myEmployee))


//  ------------------- reduce operation --------------------------


// Given an array of numbers, write a JavaScript function to calculate the sum of all the elements using reduce() method.

function addEachElement(array){
    return array.reduce((acc, current) => acc += current, 0)
}

const nums = [1, 2, 3, 4, 4, 5, 5]

console.log(addEachElement(nums))


// Given an array of strings, write a JavaScript function 
// to concatenate all the strings into a single string using reduce() method.

const concatenateAllString = (array) => {
    return array.reduce((prev, curr) => {
        return prev + curr
    }, '')
}

const programmingLanguages = ['Java', 'Python', 'JavaScript', 'Ruby', 'Go', 'Dart', 'C']

console.log(concatenateAllString(programmingLanguages))

// Given an array of objects representing students with their marks in different subjects,
// write a JavaScript function to calculate the average marks of all students in all subjects using reduce() method.

const averageMarks = (array) => {
    // We use the Object.values() method to get an array of values of the 'marks' property of each student object. 
    // The flat() method is used to flatten the resulting array of arrays into a single array.
    const allMarks = array.map(student => Object.values(student.marks)).flat()
    const totalMarks = allMarks.reduce((prev, curr) => prev + curr, 0)

    return totalMarks/allMarks.length
}


const students = [
    { name: 'John', marks: { maths: 60, science: 70, english: 80 } },
    { name: 'Beck', marks: { maths: 90, science: 45, english: 76 } },
    { name: 'Seth', marks: { maths: 40, science: 65, english: 88 } },
    { name: 'Braun', marks: { maths: 78, science: 98, english: 45 } },

]

console.log(averageMarks(students))

// Given an array of objects representing different items with their prices,
//  write a JavaScript function to calculate the total price of all items after applying  10% discount using reduce() method.

function itemsAfterDiscount(array){
    const itemsWithDiscount = array.map(item => item.price - item.price * 0.1)

    // return after adding all prices
    return itemsWithDiscount.reduce((total, current) => total + current, 0)
}

const items = [
    {itemName : 'T-shirt', price : 3500},
    {itemName : 'Pant', price : 4500},
    {itemName : 'Bag', price : 1500},
    {itemName : 'Jacket', price : 5500},
]

console.log(itemsAfterDiscount(items));

// Given an array of objects representing different employees with their salaries,
// write a JavaScript function to calculate the total salary of all employees after deducting taxes using reduce() method.

const allSalaryAfterTax = (array) => {
    // deduct salary with 20% tax 
    const salariesAfterTax = array.map(employee => employee.salary - employee.salary * 0.2)
    // add each deducted salary
    return salariesAfterTax.reduce((total, current) => total + current, 0)
}

console.log(allSalaryAfterTax(employees))