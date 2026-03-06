//************************************************Object destructuring*****************************************************//

const person = {
  name: "Utsav",
  age: 23,
  adult: true,
  profession: "Software Engineer",
  hobbies: ["travelling", "partying", "movies"],
};

//first way

console.log(person.age) //23
console.log(person.hobbies) // [ 'travelling', 'partying', 'movies' ]

//second way modern

const { name, age, profession, adult, hobbies } = person;
console.log(name); // 'Utsav'
console.log(adult)  //true

//third way modern

const { name: a, age: x, profession: y, adult: z, hobbies: b } = person;
console.log(a) //Utsav
console.log(z) //true
console.log(x) //23


//************************************************Object.keys, values, entries*****************************************************//

// These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.
// They are supported for: // Map, Set, Array


let user = {
  name: "John",
  age: 30
};

for (const element of Object.entries(user)) {
    console.log(element)
}


let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(  //return object properties as an array
    Object.entries(prices).map((elem) => [elem[0], elem[1]*2])
)
console.log(doublePrices)


let user = {
  name: 'John',
  age: 30
};

console.log(Object.keys(user)) // [ 'name', 'age' ]
console.log(Object.entries(user)) // [ [ 'name', 'John' ], [ 'age', 30 ] ]
console.log(Object.values(user)) //[ 'John', 30 ]


