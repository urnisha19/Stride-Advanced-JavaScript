//Call by value
// primitive - String, number, boolean, undefined, null
let a = 5;
let b = a;
b = 6;
console.log('a: ', a, 'b: ', b); //output: a:  5 b:  6

let num = 10;
function show(number) {
    number = number + 1;
    console.log('Updated number: ', number) //output:Updated number:  11
}
show(num);
console.log('Previous number: ', num) //output: Previous number:  10

//call by reference
// non primitive - Object, array, function
const nums = [1, 2, 3, 4]
function show1(numbers) {
    numbers.push(5)
    console.log('Updated array: ', numbers) //output:[ 1, 2, 3, 4, 5 ]
}
show1(nums);
console.log('Previous array: ', nums) //output: [ 1, 2, 3, 4, 5 ]