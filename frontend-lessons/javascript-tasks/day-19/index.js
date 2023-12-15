// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
const product = {
    name: 'Razer Kraken V3',
    price: 4680,
    quantity: 1, 
};
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
productSON = JSON.stringify(product);
// 3. Print the resulting JSON string to the console.
console.log(productSON);
// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
bookSON = '{"title":"Ready Player One","author":"Ernest Cline","publishedYear":2011}';
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
const book = JSON.parse(bookSON);
// 6. Access and print the `author` property of the resulting JavaScript object.
console.log(book.author);

// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
const person = {
    name: "Jessica",
    age: 20,
    city: "Marikina",
};

const person2 = {
    name: "John",
    age: 22,
    city:"Pasig",
};

const person3 = {
    name: "Jill",
    age: 24,
    city: "Calumpang",
};
arrObj = [person, person2, person3];
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
arrObjSON = JSON.stringify(arrObj);
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
arrObj2 = JSON.parse(arrObjSON);
// 10. Print the `name` and `city` of each person in the array to the console.
for(let i = 0; i < arrObj2.length; i++){
    console.log(arrObj2[i].name);
    console.log(arrObj2[i].city);
};
