//traversing an Array

// in array we can write any data type of values
// const array = ['string', 23, true, {name: 'Utsav'}, ['array'], undefined, null, NaN]
// console.log(array)

//here length is 1,2,3,4
//const user = ['Utsav', 23, true, 'single']
//here index is 0,1,2,3
// let arr = new Array(1,2,3)
// console.log(arr)

//console.log(user.length) //4  //length starts from 1
//console.log(user[3]) //single //access values in array by defining index value
//console.log(user.indexOf(true))//2   //index starts from 0
//console.log(user.length-1)//3  //length mathi index value kadhvi hoy tyare

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(fruits.length); // 6

//*********************************************Array Search methods************************************************************//

//1 indexOf - runs from first to last

//indexOf(value, index)
//first to last
// //console.log(user.indexOf(5)) //output = 4
// // if single parameter then it starts from 0 //first parameters ma value aapvani jeni index find karvi hoy

// console.log(user.indexOf(4, 2)) //3 //first parameters ma value aapvani je ni index find karvi hoy and second ma kyathi start karvanu e aapvanu

// const arr = [1,2,3,4,5,6,7,8]
// console.log(arr.indexOf(3,2)) //2 //here it goes to find the index of 3 from value 4

// const arr = [1,2,3,4,5,6,7,8]
// console.log(arr.indexOf(3, -2)) //-1  // negetive index value hoy to array in last thi access kare -2 = 7 so 3 7 thi start karse find karvanu to nahi male

// const user = ["a", "b", "c", "d", "e", "f", "g"];
//console.log(user.indexOf("c", 3)) //-1 // here it finds the index of c but it will start finding from d and that's why index malse nai
//console.log(user.indexOf("c", 1)) //2 // here it finds the index of c but it will start finding from index 1 and that's why ene c ni index 2 che atle ene mali jase
//console.log(user.indexOf('c', -2))  //-1
//console.log(user.indexOf('c', -6))  //2


//const user = ["apple", "banana", "cherry", "dates", 'blackberry', "guavava"];
// console.log(user.indexOf('dates', 3)) //3 //here it will start finding from index 3 and able to get index of dates because it's on index no 3
// console.log(user.indexOf('dates', 2)) //3
// console.log(user.indexOf('dates', 4)) //-1

//2 lastIndexOf - runs from last to first

// last to first
//const fruits = ["apple", "banana", "cherry", "dates", 'blackberry', "guavava"];
//console.log(fruits.lastIndexOf('dates')) //3 //it returns same output as indexOf with single parameters
//console.log(fruits.lastIndexOf('cherry',3)) //2 // here it count index dates and goes to the apple for checking if they find the value it will return index
//console.log(fruits.lastIndexOf('cherry',2)) //2 // here it count index from cherry and they able to get cherry at first index
//console.log(fruits.lastIndexOf('cherry', 1))  //-1 here it starts from bananan to apple not get value of cherry that's why it will return -1
// console.log(fruits.lastIndexOf('cherry', -2)) //2
// console.log(fruits.lastIndexOf('cherry', -5)) //-1


// const arr = [1,2,3,4,5,6,7,8]
// console.log(arr.lastIndexOf(3, -2)) //2
// console.log(arr.lastIndexOf(7, -2)) //6
// console.log(arr.lastIndexOf(8, -2)) //-1

//3 includes
//checks if values exist or not and return boolean

// const fruits = ["apple", 23, undefined, "dates", true, NaN];
// console.log(fruits.includes('date')) //false
// console.log(fruits.includes(23)) //true
// console.log(fruits.includes(false)) //false
// console.log(fruits.includes('apple')) //true
// console.log(fruits.includes(NaN)) //true
// console.log(fruits.includes(undefined)) //true

// let str = "My name is Utsav Chatrola";
//console.log(str.indexOf('n')) //3
//console.log(str.lastIndexOf('U',12)) //11  //index 12 = t that's why it found from 't' to 'M'
//console.log(str.lastIndexOf('C',12)) //-1  //index 12 = t that's why it found from 't' to 'M'
// console.log(str.includes('is')) //true
// console.log(str.includes(' ')) //true
// console.log(str.includes('chatrola')) //false

// let num = 9974183761;
//console.log(num.indexOf(8,7)) //-1
//console.log(num.lastIndexOf(6,8)) //8
//console.log(num.lastIndexOf(4,9)) //3
// console.log(num.includes(37)) //true
// console.log(num.includes(86)) //false
// console.log(num.includes(9)) //true

//*********************************************Array filter methods************************************************************//

// find() - it return the first element of an array which satisfies the provided callback function/ condition.
//returns undefined if not get values

// const users = [{name: 'Utsav', age: 23}, {name: 'vasu', age: 22}, {name: 'Dhruv', age: 24}, {name: 'Krunal', age: 21}]

// const fetchd = users.find(user => user.age>23)
// console.log(fetchd) //output = { name: 'Dhruv', age: 24 }

// const userSr = [1,2,3,4,5,6,7,8,9]

// let fic = userSr.find(user => user>4)
// console.log(fic) //5

// let fic = userSr.find(user => user<3)
// console.log(fic) //1

// let fic = userSr.find(user => user<'3')
// console.log(fic) //1

// let fic = userSr.find(user => user ==='3')
// console.log(fic) //undefined

// let fic = userSr.find(user => user =='3')
// console.log(fic) //3

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
// let fic = alphabet.find(user => user>'c')
// console.log(fic) //d

/////findIndex() - works first to last

// let fic = userSr.findIndex(user => user =='3')
// console.log(fic) //2

// let fic = userSr.findIndex(user => user >'3')
// console.log(fic) //3

//findLast() - works last to first
//  const userSr = [1,2,3,4,5,6,7,8,9]

//  let fic = userSr.findLast(num => num > 5)
//  console.log(fic)// 9

//  let fic = userSr.findLast(num => num > 9)
//  console.log(fic)// undefined

////findLastIndex() - works last to first

//  const userSr = [1,2,3,4,5,6,7,8,9]
//  let fic = userSr.findLastIndex(num => num > 5)
//  console.log(fic)// 8

//  let fic = userSr.findLastIndex(num => num === 5)
//  console.log(fic)// 4

//some() - return boolean
// check kare ke provided condition mathi array nu only one element match thay che ke nai ena basis par return boolean

// const userSr = [1,2,3,4,2,5,6,7,8,9]
// let result = userSr.some(num => num>8)
// console.log(result) // true

// const users = [{name: 'Utsav', age: 23}, {name: 'vasu', age: 22}, {name: 'Dhruv', age: 24}, {name: 'Krunal', age: 21}]
// const result = users.some(user => user.age<22)
// console.log(result) // true

// const arr = ['Utsav', 23, true, {}]
// const result = arr.some(elem => elem === 'Utsav')
// console.log(result) // true

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
// let fic = alphabet.some(user => user>'c')
// console.log(fic) //true

//every() - return boolean
// check kare ke provided condition mathi array nu only all element match thay che ke nai ena basis par return boolean

// const userSr = [1,2,3,4,2,5,6,7,8,9]
// let result = userSr.every(num => num>8)
// console.log(result) // false

// const users = [{name: 'Utsav', age: 23}, {name: 'vasu', age: 22}, {name: 'Dhruv', age: 24}, {name: 'Krunal', age: 21}]
// const result = users.every(user => user.age>20)
// console.log(result) // true

// const arr = ['Utsav', 23, true, {}]
// const result = arr.every(elem => elem === 'Utsav')
// console.log(result) // false

// const arr = ['Utsav', 'Vasuv', 'dhruv', 'krunv']
// const result = arr.every(elem => elem.includes('v'))
// console.log(result) // true

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
// let fic = alphabet.every(user => user>'c')
// console.log(fic) //false

//filter() - returns elements or []

// const alphabet = ["a", "c", "d", "f", "b", "e"];
// let result = alphabet.filter((elem) => {
//     return elem> 'c'
//  })
// console.log(result) // [ 'd', 'f', 'e' ]

// const alphabet = [1, 3, 4, 2, 6, 5];
// let result = alphabet.filter((num) => num>3)
// console.log(result)  // [ 4, 6, 5 ]

// const users = [{name: 'Utsav', age: 23}, {name: 'vasu', age: 22}, {name: 'Dhruv', age: 24}, {name: 'Krunal', age: 21}]
// const result = users.filter(user => user.age>21)
// console.log(result) // utsav, vasu, dhruv

// const alphabet = [1, 3, 4, 2, 6, 5];
// let result = alphabet.filter((num) => num !== 3);
// console.log(result); // [1, 4,2, 6, 5 ]

//*********************************************Array sort methods************************************************************//

//sort() - it sorts an array elements alphabatically

// const alphabet = ["a", "c", "d", "f", "b", "e"];
// alphabet.sort()
// console.log(alphabet) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// const alphabet = [1, 3, 4, 2, 6, 5];
// alphabet.sort()
// console.log(alphabet) // [ 1, 2, 3, 4, 5, 6 ]

// function sorting(a, b) {
//   return a - b;
// }

// const alphabet = [1, 3, 4, 2, 6, 500, 200, 120, 467].sort(sorting);
// console.log(alphabet); // [1,2,3,4,6,120,200,467,500] //ascending order

// const alphabet = [1, 3, 4, 2, 6, 500, 200, 120, 467];
// alphabet.sort((a, b) => b - a);
// console.log(alphabet);  //[500, 467, 200, 120, 6, 4, 3, 2, 1]; //descending order

// let movies = [
//   {
//     name: "The Avengers",
//     releaseYear: 2020,
//     Genre: "Action"
//   },
//   {
//     name: "Phir hera Pheri",
//     releaseYear: 2016,
//     Genre: "Comedy"
//   },
//   {
//     name: "Avatar",
//     releaseYear: 2011,
//     Genre: "Sci-Fi"
//   },
//   {
//     name: "Shiddat",
//     releaseYear: 2018,
//     Genre: "Romance"
//   },
//     {
//     name: "Marco",
//     releaseYear: 2019,
//     Genre: "Thriller"
//   },
//     {
//     name: "Extraction",
//     releaseYear: 2022,
//     Genre: "Action"
//   },
//     {
//     name: "Ek villain",
//     releaseYear: 2015,
//     Genre: "Romance"
//   },
// ];

// movies.sort((a,b) => a.releaseYear - b.releaseYear)
// console.log(movies)

//*********************************************Array crud methods************************************************************//

//push - it add elements at the end of the array
// if nothing to add returns the array with existing values
//it will also add element and return updated length of an array

// const arr = ['patel']

// const name = 'Utsav'
// arr.push(name)
// console.log(arr)

//  const arr = ['patel', 23, true, undefined, NaN, {}]
// console.log(arr.push('Utsav')) // returns length of an array in log
// console.log(arr) //[ 'patel', 23, true, undefined, NaN, {}, 'Utsav' ]

// const name = "Utsav";
// const lastName = "Chatrola";
// const age = 23;
// const married = false;
// let adhaar;
// const fullName = name + ' ' + lastName
// const userArray = []

// userArray.push({fullName, age, married, adhaar})
// userArray.push({fullName, age, married, adhaar})
// console.log(userArray)

//pop - removes last element of an array

// const arr = ['patel', 23, true, undefined, NaN, {}]
//console.log(arr.pop())  // {}
// console.log(arr) // [ 'patel', 23, true, undefined, NaN ]

// const name = "Utsav";
// const lastName = "Chatrola";
// const age = 23;
// const married = false;
// let adhaar;
// const fullName = name + ' ' + lastName
// const userArray = []

// userArray.push({fullName, age, married, adhaar})
// userArray.push({fullName, age, married})
// userArray.pop()
// console.log(userArray)

//unshift() - add element at the beginning of an array
//it will also add element and return updated length of an array

// const arr = ['patel', 23, true, undefined, NaN, {}]
// arr.unshift('Utsav')
//console.log(arr.unshift())  //7 return length of an array
// arr.unshift(21, 'married', 'software engineer')

// console.log(arr) // [ 'Utsav','patel', 23, true, undefined, NaN ]

//shift() - removes first element of array

// const arr = ['patel', 23, true, undefined, NaN, {}]
// console.log(arr.shift())  // patel   return removed elements of an array
// console.log(arr)  // [ 23, true, undefined, NaN, {} ]

// splice()

const arr = ['a','b','c', 'd', 'e', 'f']
// arr.splice(2,2,'x','y')
// console.log(arr)  // [ 'a', 'b', 'x', 'y', 'e', 'f' ]
// console.log(arr.slice(3,5)) //['d','e']

// let movies = [
//   {
//     name: "The Avengers",
//     releaseYear: 2020,
//     Genre: "Action"
//   },
//   {
//     name: "Phir hera Pheri",
//     releaseYear: 2016,
//     Genre: "Comedy"
//   },
//   {
//     name: "Avatar",
//     releaseYear: 2011,
//     Genre: "Sci-Fi"
//   },
//   {
//     name: "Shiddat",
//     releaseYear: 2018,
//     Genre: "Romance"
//   },
//     {
//     name: "Marco",
//     releaseYear: 2019,
//     Genre: "Thriller"
//   },
//     {
//     name: "Extraction",
//     releaseYear: 2022,
//     Genre: "Action"
//   },
//     {
//     name: "Ek villain",
//     releaseYear: 2015,
//     Genre: "Romance"
//   },
// ];
// movies.splice(1,1,{name: 'Toxic', releaseYear: 2026, Genre: 'Violence'})
// console.log(movies) // remove phir hera pheri //add toxic

// const num = [100, 200, 300, 400, 500, 600, 700];
// num.splice(2, 3, 900, 1000, 1100);
//console.log(num.splice()) // []
//console.log(num.splice(2, 3, 900, 1000, 1100)) // [900,1000, 1100]  only return elements which added
// console.log(num); // [100,200,900,1000,1100,600,700]

// const num = [100, 200, 300, 400, 500, 600, 700];
// num.splice(-2, 3, 900, 1000, 1100);   //here it removes last 2 elements from an array beacuse -2 index refers 700 = -1 600 = -2
// //now 600 becomes startIndex which index value is 5 and that's why only 2 elements available for remove 3rd will be ignored
// console.log(num); // [ 100, 200, 300, 400, 500, 900, 1000, 1100 ]

//map() - return new array
//similar to foreach

//const num = [100, 200, 300, 400, 500, 600, 700];
// let result = num.map((elem) => elem > 300);
//console.log(result)  //[false, false, false, true, true, true, true];

// const obj = {multiplier: 2}
// const num = [100, 200, 300, 400, 500, 600, 700];

// const result = num.map(function(ele){
//     return ele * this.multiplier
// },obj)

// console.log(result)  //[200, 400, 600, 800, 1000, 1200, 1400]

// let movies = [
//   {
//     name: "The Avengers",
//     releaseYear: 2020,
//     Genre: "Action",
//   },
//   {
//     name: "Phir hera Pheri",
//     releaseYear: 2016,
//     Genre: "Comedy",
//   },
//   {
//     name: "Avatar",
//     releaseYear: 2011,
//     Genre: "Sci-Fi",
//   },
//   {
//     name: "Shiddat",
//     releaseYear: 2018,
//     Genre: "Romance",
//   },
//   {
//     name: "Marco",
//     releaseYear: 2019,
//     Genre: "Thriller",
//   },
//   {
//     name: "Extraction",
//     releaseYear: 2022,
//     Genre: "Action",
//   },
//   {
//     name: "Ek villain",
//     releaseYear: 2015,
//     Genre: "Romance",
//   },
// ];

// const result = movies.map((elem) => elem.Genre === 'Action')
// console.log(result)  //[true, false, false, false, false, true, false];

// const result = movies.map((elem) => elem.releaseYear > 2017)
// console.log(result)  //[true, false, false, true, true, true, false];

//map is chaining method
// const result = movies.map((elem) => {
//   elem.Genre += ",Drama";
//   return elem
// }).filter((elem) => elem.releaseYear > 2018)
// console.log(result); 


//reduce( )

// const arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// let result = arr.reduce((acc,val) => {
//     return acc.concat(val)
// })
// console.log(result) // [1,2,3,4,5,6,7,8,9,10,11,12]

// let result = arr.reduce((acc,val) => {
//     return acc + val
// })
// console.log(result) //1,2,3,4,5,67,8,9,10,11,12

// const arr = [1,2,3,4,5,6,7,8,9]
// let result = arr.reduce((acc, val) => {
//    return acc+val
// },10)
// console.log(result) // 55  //here initialvalue assigned 10 so it sum 10+1 =11, then 11+2 =13, then 13+3 =16 , so on until 9

// let result = arr.reduce((acc, val) => {
//    return acc+val
// },[])
// console.log(result) // '123456789' //accumulator [] converts into '' and 1+[] = '1', '1'+2 = '12', '12'+3 = '123'

// console.log([1,2,3].reduce((a,b)=>a+b)) 

// const arr = [1,2,3,4,5,6,7,8,9]
// let result = arr.reduce((acc, val) => {
//    return acc+val
// })
// console.log(result) //45

// const arr = [[[1,2,3],[4,5,6]], [[7,8,9],[10,11,12]]]
// let result = arr.reduce((acc,val) => {
//     return acc.concat(val)
// })
// console.log(result) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]


// const arr = [[[1,2,3],[4,5,6]], [[7,8,9],[10,11,12]]]
// let result = arr.reduce((acc,val) => {
//     return acc.concat(val).reduce((acc,elem) => {
//         return acc.concat(elem)
//     })
// })
// console.log(result) 

// let result = arr.reduce((acc,val) => {
//     return acc.concat(Array.isArray(val)? flattern(val) : val)
// },[])


