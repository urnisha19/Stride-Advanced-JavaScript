//--------------------------Global scope
const name = 'Alex'; //global scope

function show() {
    console.log(name)
}

show() //Output: Alex

//--------------------------Functional scope
function show2() {
    const name2 = 'Jhon';
    console.log(name2) //Output: Jhon
}
//console.log(name2) //Output: ReferenceError: name2 is not defined
show2()

//--------------------------Block scope
function show3() {
    var number = 3; // প্যারেন্ট ব্লকের ভ্যারিয়েবল
    function inner() {
        const name3 = 'Joe'; // চাইল্ড ব্লকের ভ্যারিয়েবল
        console.log(name3, number); // চাইল্ড ব্লক প্যারেন্টের ভ্যারিয়েবল number অ্যাক্সেস করতে পারে
    }
    // console.log(name3); // এটি ReferenceError দিবে কারণ প্যারেন্ট ব্লক চাইল্ড ব্লকের ভ্যারিয়েবল name3 অ্যাক্সেস করতে পারে না
    inner();
}
show3(); //Output: Joe 3

//var
// function example() {
//     var x = 10;
//     if (true) {
//         var x = 20; // Same variable!
//         console.log(x); // Output: 20
//     }
//     console.log(x); // Output: 20
// }
// example();

// //let
// function exampleLet() {
//     let y = 10;
//     if (true) {
//         let y = 20; // different variable, since let is block-scoped
//         console.log(y); // Output: 20
//     }
//     console.log(y); // Output: 10
// }
// exampleLet();

// //const
// function exampleConst() {
//     const z = 30;
//     // z = 40; // Error: Assignment to constant variable.
//     console.log(z); // Output: 30

//     const person = { name: 'John', age: 25 };
//     person.age = 26; // Allowed, since the object reference is not changed
//     console.log(person); // Output: { name: 'John', age: 26 }
// }
// exampleConst();



