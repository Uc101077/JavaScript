//**************************************************functions exploration****************************************************** */

// function multiply(){ //this how we declare the function
// }
// multiply() //function call

// function sum (a,b) { //this is how declare parameters in function
// }
// sum(5,10) //this how we pass arguments in function

// function sum (a,b = 2) { //this is how declare default parameters in function
// }
// sum(5) //if second argument is missing it takes default value which is 2 as an argument

// function name(str) {
//     return str; //function with return keyword //it also returns anything such as conditions which is boolean
// }
// console.log(name('Utsav'))

//**************************************************normal function without argument****************************************************** */
//normal function


// function multiplyby(){
//     let a =5
//     let b = 4
//     b=2
//     console.log(a*b)

//     var s = 3
//     var s =4
//     var t = 5
//     console.log(s+t)

//     const x = 5
//     const y =3
//     console.log(x-y)
// }
// multiplyby()

//normal function can be accessible before its declaration
// fullName()
// function fullName(){
//     let fName = 'Utsav'
//     let lName = 'Patel'
//     let age = 23

//     console.log(`My name is ${fName} ${lName} \nI am ${age} years old`)
// }


//**************************************************normal function with argument****************************************************** */
//normal function have this keyword support
// function fullName(name){
//     console.log(name)
// }
// fullName('Utsav Chatrola')

// function checkMaths(a,b){
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
//     console.log(a%b)
// }
// checkMaths(5,4)

//function with default arguement value

// function defaultVal(a = 4, b) {
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(a / b);
//   console.log(a % b);
// }
// defaultVal(undefined,5)

// function defaultVal2(a = 4, b) {
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(a / b);
//   console.log(a % b);
// }
// defaultVal2(5,5)

// function defaultVal3(a, b=3) {
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(a / b);
//   console.log(a % b);
// }
// defaultVal3(5)

//**************************************************normal function with return*******************************************************//

// function checkGender(arg){
//     let gender = arg
//     if(gender == 'male'){
//         gender = 'female'
//     } else {
//         gender = 'male'
//     }
//     return gender
// }
// console.log(checkGender('male'))

// function evenOdd(val){
//     if(val %2 === 0){
//         console.log('even')
//     } else {
//         console.log('odd')
//     }
//     return val
// }
// evenOdd(8)

// function test(val){
//     if(val < 10){
//         let added = val+1
//         if(added){
//             console.log('value is less than 10 and 1 added in inputed value')
//             console.log(added)
//         }
//     } else {
//         console.log('value is greater than 10')
//     }
// }
// test(9)

// function checkMonth(val) {
//   let date = val;
//   switch (date) {
//     case 0:
//       console.log("Jan");
//       break;
//     case 1:
//       console.log("Feb");
//       break;
//     case 2:
//       console.log("Mar");
//       break;
//     case 3:
//       console.log("Apr");
//       break;
//     case 4:
//       console.log("May");
//       break;
//     case 5:
//       console.log("Jun");
//       break;
//     case 6:
//       console.log("Jul");
//       break;
//     case 7:
//       console.log("Aug");
//       break;
//     case 8:
//       console.log("Sep");
//       break;
//     case 9:
//       console.log("Oct");
//       break;
//     case 10:
//       console.log("Nov");
//       break;
//     case 11:
//       console.log("Dec");
//       break;
//     default:
//       console.log("unable to fetch month");
//       break;
//   }
//   return date
// }
// let getMo = new Date().getMonth()
// checkMonth(getMo);

// function withTernary(name, surname, age, password) {
//   const admin =
//     (name === "Utsav" && age === 23 && surname === "Chatrola") || password ==='xyzd'
//       ? console.log("you are an Admin")
//       : console.log("You are user");
//   return
// }
// withTernary("Utsav", "Chatr", 23, 'xyzd');

//**************************************************Arrow functions*******************************************************//

//arrow function does'nt have this keyword support
// const name = () => { //this is how arrow functions declared

// }
// name() //function call

// const fullname = (params) => { //this is how params declared in arrow fnction

// }
// fullname('Utsav') //this is how argumemts have been passed in arrow function

// const fullName = (fname, lname='Patel') => {  //this how default values assigned to the parameters
//     console.log(fname+ lname)
// }
// fullName('Utsav')

// const greet = (name) => {
//     return name; // this how arrow function has been returned
// }
// console.log(greet("kano"))

//**************************************************arrow function without argument****************************************************** */

// const checkAge = () => {
//     let age =19
//     console.log(age)
// }
// checkAge()

// const welcomeMsg = () => {
//     let greet = 'Hello, I hope you doing well'
//     console.log(greet)
// }
// welcomeMsg()

// const calculation = () => {
//   let a = 13;
//   a = 12;
//   const b = 12;

//   console.log(a+b)
//   console.log(a-b)
//   console.log(a*b)
//   console.log(a/b)
//   console.log(a%b)
// };
// calculation();

//**************************************************arrow function with argument****************************************************** */

// const fullName = (name) => {
//     console.log(name)
// }
// fullName('Utsav Chatrola')

// const checkMaths = (a,b) =>{
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
//     console.log(a%b)
// }
// checkMaths(5,4)

//function with default arguement value

// const defaultVal = (a = 4, b) => {
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(a / b);
//   console.log(a % b);
// }
// defaultVal(undefined,5)

// const defaultVal2 = (a = 4, b) => {
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(a / b);
//   console.log(a % b);
// }
// defaultVal2(5,5)

// const defaultVal3 = (a, b=3) => {
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(a / b);
//   console.log(a % b);
// }
// defaultVal3(5)

//************************************************** arrow function with return*******************************************************//

// const checkGender = (arg) =>{
//     let gender = arg
//     if(gender == 'male'){
//         gender = 'female'
//     } else {
//         gender = 'male'
//     }
//     return gender
// }
// console.log(checkGender('male'))

// const evenOdd = (val) =>{
//     if(val %2 === 0){
//         console.log('even')
//     } else {
//         console.log('odd')
//     }
//     return val
// }
// evenOdd(8)

// const test = (val) => {
//     if(val < 10){
//         let added = val+1
//         if(added){
//             console.log('value is less than 10 and 1 added in inputed value')
//             console.log(added)
//         }
//     } else {
//         console.log('value is greater than 10')
//     }
// }
// test(9)

// const checkMonth = (val) => {
//   let date = val;
//   switch (date) {
//     case 0:
//       console.log("Jan");
//       break;
//     case 1:
//       console.log("Feb");
//       break;
//     case 2:
//       console.log("Mar");
//       break;
//     case 3:
//       console.log("Apr");
//       break;
//     case 4:
//       console.log("May");
//       break;
//     case 5:
//       console.log("Jun");
//       break;
//     case 6:
//       console.log("Jul");
//       break;
//     case 7:
//       console.log("Aug");
//       break;
//     case 8:
//       console.log("Sep");
//       break;
//     case 9:
//       console.log("Oct");
//       break;
//     case 10:
//       console.log("Nov");
//       break;
//     case 11:
//       console.log("Dec");
//       break;
//     default:
//       console.log("unable to fetch month");
//       break;
//   }
//   return date
// }
// let getMo = new Date().getMonth()
// checkMonth(getMo);

// const withTernary = (name, surname, age, password) => {
//     (name === "Utsav" && age === 23 && surname === "Chatrola") || password ==='xyzd'
//       ? console.log("you are an Admin")
//       : console.log("You are user");
//   return
// }
// withTernary("Utsav", "Chatrola", 13, 'xyzd');

//**************************************Immediately invoked function expression(IIFE)***************************************//

//IIFE runs immediately after javascript engine compile the code

// (function (arg) {//function declared in first bracket
//   console.log(arg);
//   console.log("database connected");
// })("M*797"); //argument passed on second bracket and it will help to execute the function immediately

// (function greet (arg) {//function declared in first bracket
//   console.log(arg+" Welcome to the Team");
// })("Utsav"); //argument passed on second bracket

//*********************************************function expression************************************************************//

// const multiply = function () {//this is how normal function expression write
//   return;
// };
// let z = multiply(); //this how normal function expression called

// const multiply = function(a,b) { //this how parameters passed in function expression
//     return a+b
// };
// let z = multiply(2,3) //this how agrument passed function expression called
// console.log(z)

// const multiply = function (a, b = 5) {
//   //this how default values assigned in function expression
//   return a * b;
// };
// let z = multiply(2); //this how agrument passed function expression called
// console.log(z);

// const fullName = (fname, lname='Patel') => {  //this how arrow function used as function expression
//     return(fname+ ' '+lname)
// }
// let personalDetails = fullName('Utsav')
// console.log(personalDetails)


// const checkMonth = (val) => {
//   let date = val;
//   switch (date) {
//     case 0:
//       console.log("Jan");
//       break;
//     case 1:
//       console.log("Feb");
//       break;
//     case 2:
//       console.log("Mar");
//       break;
//     case 3:
//       console.log("Apr");
//       break;
//     case 4:
//       console.log("May");
//       break;
//     case 5:
//       console.log("Jun");
//       break;
//     case 6:
//       console.log("Jul");
//       break;
//     case 7:
//       console.log("Aug");
//       break;
//     case 8:
//       console.log("Sep");
//       break;
//     case 9:
//       console.log("Oct");
//       break;
//     case 10:
//       console.log("Nov");
//       break;
//     case 11:
//       console.log("Dec");
//       break;
//     default:
//       console.log("unable to fetch month");
//       break;
//   }
//   return date
// }
// let getMo = new Date().getMonth()
// const fetchVal = checkMonth(getMo);
// console.log(fetchVal) //here we can access the value which is returned by function

