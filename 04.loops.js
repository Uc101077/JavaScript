//while loop //
// let i = 1;
// while (i <= 10) {
//   let text = "This is number";
//   console.log(text + " " + i);
//   i++;
// }

// do while loop // run once before checking condition then if condition is false stops execution

// do{
//     console.log(i)
//     i++
// } while(i<= 0)

//for loop //

// let val = "Roll number ";
// let merge = [];
// for (let a = 0; a <= 5; a++) {
//   console.log(merge.push(val + a));
// }
// console.log(merge);

//for of loop return elements //

// const arr = ['Utsav', 23, 'vasu', 22, 'krunal', 21]

// const str = 'Utsav Patel'

// for(let ele of arr){
//     console.log(ele)
// }

// for(let char of str){
//     console.log(char)
// }

// const arr = [22, 23, 26, 29, 34, 27];

// for (let value of arr) {
//   if (value === 29) break; // here it stops the loop and return values which comes before 29
//   console.log(value);
// }
// //22 23 26

// for in loop return index//

// const name = ["Utsav", "vasu", "krunal"];

// for(let val in name){
//     console.log(val)
// } //index

// const person = {
//     name: 'Utsav',
//     married: false,
//     age: 23
// }

// for(keys in person){
//     console.log(keys + ':' + person[keys])
// }

// const lang = 'javascript'

// for(let index in lang){
//     console.log(index)
// }


//foreach loop

//it is combination of for of and for in loop
//foreach method have four parameters (element, index, arr, thisArg)
//thisarg works only on normal function
//forEach returns nothing

// const arr = ['Utsav', 23, false, {status: true}]

// const forStore = arr.forEach(function(element, index, arr, thisArg) {
//     //console.log(thisArg)
// },arg);
//console.log(forStore) //undefined because forEach returns nothing

// let obj = { name: "Kano" };

// arr.forEach(function(element) {
//     console.log(this);
// }, obj);

// arr.forEach((element) => {
//     console.log(element)
// });

// arr.forEach((element,index) => {
//     console.log(index)
// });

// arr.forEach((element,index,arr) => {
//     console.log(arr)
// });

// arr.forEach((_,_,arr) => {
//     console.log(arr)
// }) // if we want to access particular value in foreach we need to define _underscore as an empty parameter

// let arr2 =['Utsav', 23, true, 'Software Engineer']
// arr2.forEach((item, index, arr) => {
//     console.log(`The index of ${item} is ${index} from the ${arr}`)
// })

// const arr = [22, 23, 26, 29, 34, 27];

// arr.forEach((elem) => {
//   if (elem === 26) return; // it will stops here and not return the value 26
//   console.log(elem);
// });
// // 22 23 29 34 27
