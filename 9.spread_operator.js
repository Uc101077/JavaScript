//spread operators  //return individual element // used in arr,obj, and mainly function calls

// The spread operator (...arr) in JavaScript is used to expand an array or object into individual elements. It allows you to easily pass elements from an array as separate arguments in a function call or combine multiple arrays into one.

function normal(name, age, bool, profession) {
  console.log(name); //Utsav
  console.log(age); //23
  console.log(bool); // true
  console.log(profession); //{ profession: 'Software Engineer' }
}
let arr = ["Utsav", 23, true, { profession: "Software Engineer" }];
// normal(arr) //here it return entire array with first parameter and remaining params stay undefined
//Output =
//[ 'Utsav', 23, true, { profession: 'Software Engineer' } ]
// undefined
// undefined
// undefined
normal(...arr); //here it converts/spread all array elements into sperate argument
//Output =
//Utsav
// 23
// true
// { profession: 'Software Engineer' }


//other uses of spread params

//1 merge array

// const arr1 = [1,2]
// const arr2 = [3,4]
// const merge = [...arr1, ...arr2]
// console.log(merge)

//2 clone array

// const arr1 = ['apple', 'Samsung', 'oppo', 'vivo']
// const clone = [...arr1]
// console.log(clone)

//3 combine obj

// const obj1 = {
//     name: 'Utsav',
//     age: 23,
// }
// const obj2 = {
//     email: 'utsav@gmail.com',
//     admin: true
// }
// const combine = {...obj1, ...obj2}
// console.log(combine)
