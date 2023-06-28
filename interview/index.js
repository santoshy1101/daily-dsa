
// function find(){
//     let a = b = 0;
//     a++;
//     return a
// }

// find()

// console.log("a typeOf" , typeof  a)
// console.log("b typeOf" , typeof  b)

// function getName(){
//     'use strict'
//     name = "santosh";
//     console.log(name)
// }

// getName()

// Store a string in session storage
sessionStorage.setItem("name", "John Doe");

// Store an object in session storage
const user = {
  name: 'John Doe',
  age: 30,
  city: 'San Francisco',
}
sessionStorage.setItem("user", JSON.stringify(user))

// Read a string from session storage
// const name = sessionStorage.getItem('name')

// Read an object from session storage
const userObject = JSON.parse(sessionStorage.getItem('user'))
console.log(userObject) 
console.log("gelo")
