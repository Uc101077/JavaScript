//************************************************Array destructuring*****************************************************//


// 1 - simple and legacy method

// const array = ['a','b','c','d','e']
// console.log(array[0]) // a
// console.log(array[1]) // b
// console.log(array[2]) // c
// console.log(array[3]) // d

// const products = [
//   { category: "Electronics", quantity: 10, price: 55000 },
//   { category: "Home-Kitchen", quantity: 1000, price: 20000 },
//   { category: "Clothing", quantity: 2000, price: 10000 },
// ];
// console.log(products[0]) // { category: 'Electronics', quantity: 10, price: 55000 }

//2 - second modern way

// const array = ['a','b','c','d','e'];

// const [first, second, third]  = array
// console.log(first) // a
// console.log(second) // b
// console.log(third) // c

// const [a,b,c] = 'abc'
// console.log(a) //a
// console.log(b) //b
// console.log(c) //c


// let [firstName, surname, age] = "Utsav Chatrola 23".split(' ');
// console.log(firstName) //Utsav
// console.log(surname) // Chatrola
// console.log(age) //23

//set default values
// let [firstName = 'Kano', lastName = 'Patel'] = new Set([undefined, 'Chatrola']) // here Set create new array
// console.log(firstName, lastName) // Kano Chatrola


//3 - find a particular elements of an array

// const array = ['a','b','c','d','e'];
// const [first, , , ,last] = array
// console.log(first)  //a
// console.log(last)  //e

// second element is not needed
// let [firstName, , title] = ["Utsav", "Chatrola", "Vasu", "Bhalara"];
// console.log(title)



//************************************************Swap array elements*****************************************************//


//1 normal way //modern

// const arr = ["apple", "banana", "cherry", "dates"];
// [arr[0], arr[1], arr[2], arr[3]] = [arr[3], arr[0], arr[1], arr[2]];
// console.log(arr); // [ 'dates', 'apple', 'banana', 'cherry' ]

//2 using temp variable  //old method

// const arr = [10, 20, 30, 40,50];

// let temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// console.log(arr)

