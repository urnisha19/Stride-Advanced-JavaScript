//----------------------------------------------Function is a value because:
//1. ফাংশনকে একটি ভ্যারিয়েবলে স্টোর করা যায়
const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet('Alice')); // Output: Hello, Alice!

//2. ফাংশনকে অন্য ফাংশনের আর্গুমেন্ট হিসেবে পাস করা যায়
function processUserInput(callback) {
    const name = 'Bob';
    console.log(callback(name));
}
processUserInput(greet); // Output: Hello, Bob!

// 3. ফাংশনগুলি অন্য ফাংশন থেকে রিটার্ন করা যায়। 
function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}
//এখানে createGreeting একটি আর্গুমেন্ট greeting গ্রহণ করে এবং একটি অভ্যন্তরীণ ফাংশন রিটার্ন করে। এই অভ্যন্তরীণ ফাংশনটি একটি আর্গুমেন্ট name গ্রহণ করে এবং একটি গ্রিটিং মেসেজ রিটার্ন করে যা greeting এবং name ব্যবহার করে গঠিত হয়।

const sayHello = createGreeting('Hello'); //এখানে createGreeting('Hello') কল করার ফলে, এটি একটি নতুন ফাংশন রিটার্ন করে যা greeting হিসেবে 'Hello' ব্যবহার করবে। এই রিটার্ন করা ফাংশনটি sayHello ভ্যারিয়েবলে সংরক্ষণ করা হয়েছে।
console.log(sayHello('Charlie')); //এখানে sayHello('Charlie') কল করার ফলে, অভ্যন্তরীণ ফাংশনটি name হিসেবে 'Charlie' গ্রহণ করে এবং গ্রিটিং মেসেজ হিসেবে 'Hello, Charlie!' রিটার্ন করে, যা কনসোলে প্রিন্ট করা হয়।
// Output: Hello, Charlie!

// 4.ফাংশনগুলি অবজেক্টের প্রপার্টি বা মেথড হিসেবে ব্যবহার করা যায়।
const person = {
    name: 'Eve',
    greet: function () {
        return `Hello, ${this.name}!`;
    }
};
console.log(person.greet()); // Output: Hello, Eve!

//-----------------------------------------------------Higher Order function
/**
 * Higher Order Functions হলো এমন ফাংশন যা অন্য ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করে বা একটি ফাংশনকে রিটার্ন করে। 
 * /Higher Order Function Accepts a function as parameter or Return a function
 */

//Accepts a function as parameter
function xyz() {
    console.log("Hello")
}

function abc(parameter_function) {
    parameter_function()
}

abc(xyz) //passed xyz function in abc function as parameter

//Return a function
function abc2() {
    return function () {
        console.log("Hello return");
    };
}
const returnedFunction = abc2(); // abc2() ফাংশনটি কল করে রিটার্ন করা ফাংশনটি returnedFunction এ সংরক্ষণ করা হলো
returnedFunction(); // Output: Hello return


//--------------Some Real life example of Higher Order function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x); //passing another function in map function
console.log(squaredNumbers); //Output: [1, 4, 9, 16, 25]