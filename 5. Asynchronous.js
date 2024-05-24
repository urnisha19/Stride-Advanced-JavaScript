// JavaScript is ⁡⁣⁣⁢Single-threaded⁡, ⁡⁣⁣⁢N⁡⁣⁣⁢on blocking, asynchronous high level programming language⁡

//task 1
const num = 5;
console.log(num);

//task 2
function show() {
    console.log('Hey, I am a function !')
};
show()

//task 3 asynchronous function
function abc() {
    setTimeout(() => {
        console.log('Hey, I am asynchoronous function')
    }, 3000)
}
abc()
console.log('I am after asynchronous function')