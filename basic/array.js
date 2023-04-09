
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

// Given an array of strings representing different cities, write a JavaScript function to filter out all cities that start with the letter "A".
// Given an array of objects representing different employees, write a JavaScript function to filter out all employees who earn less than a certain amount, say $50,000 per year.


