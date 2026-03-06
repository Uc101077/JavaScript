//create and add properies in object
const objs = new Object();

objs.name = "Utsav";
objs["age"] = 23;
objs.isUser = false;
objs.isAdmin = true;

delete objs.isUser; // to delete peoperties from object

console.log(objs);

const obj2 = {
  name: "Kano",
  age: 23,
  isUser: true,
  isAdmin: false,
};

const main = Object.assign(objs, obj2);
//const main = {...objs,...obj2}

console.log(main);

let user1 = {
  name: "Kano",
  surname: "Patel",
};

user1.name = "Utsav";
delete user1.name;
console.log(user1);

//add key value in object
const dt = { name: "A", age: 20 }
const added = { ...dt, likes : 21 }
console.log(data)
console.log(added)

//update key value in object
const data = { name: "A", age: 20 }
const updated = { ...data, age: 21 }
console.log(data)
console.log(updated)


const obj1 = {
  name: "Utsav",
  age: 3,
  isAdmin: false,
};

function changeProps(obj) {
  for (let key in obj1) {
    if (typeof obj1[key] == "boolean") {
      obj1[key] = true;
    }
  }
}
changeProps(obj1);
console.log(obj1);

let a = {};
let b = a;

console.log(a === b);

//clone object

const obj = {
  name: "Utsav",
  age: 23,
  isAdmin: false,
};

let clone = {};

for (const key in obj) {
  clone[key] = obj[key];
}
clone.name = "Kano";
console.log(obj);
console.log(clone);

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

console.log(user);


// transforming objects

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let double = Object.fromEntries(
  Object.entries(prices).map((elem) => {
    //elem[0] = // return keys of object
    //elem[1] = // return values of object
    return [elem[0]+= 's', elem[1] * 2];
  }),
);
console.log(double);


