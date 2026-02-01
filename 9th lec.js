
//  primitive
// 7types : string, Number, Boolean, null, undefined, symbol, BigInt

// Reference Type (Non Primitive)
// Array, Objects, Function

const heros=["Saktiman", "Doga", "Nagraj"]

// let myObj={ 
//     name: "Raj",
//     age : 22,
// }

// const myFunction = function(){
//    // console.log("hello")
// }

console.log(typeof heros)

console.log(heros)

const mixedarr=["raj",20, 23.5] //in js array may have many datatypes
console.log(mixedarr)
console.log(mixedarr.length)


let empArr=[]
console.log(empArr)

const fruits=["apple", "banana", "carrot"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[7])  //here there is nothing at 7th index
fruits[7]="mango"       // we inserted an element at that index
console.log(fruits)
console.log(fruits.length)


/*
 ARRAY Methods
 push :-add to end
 pop :- delete from end & returns it

 Unshift:- add to start
 shift :- delete from start & returns it
 */


 fruits.push("lichi")
 console.log(fruits)
 console.log(fruits.pop())

 console.log(fruits.indexOf("banana"))  //index returns the index value
 console.log(fruits.indexOf("Banana"))  //Banana is not prs in the array


 console.log(fruits.includes("apple"))  // includes check whether its prs or not

// concat used to merge two array
let vegetables=["potatao", "brinjal", "bean"]

 console.log(fruits.concat(vegetables))

 console.log(vegetables.reverse())

 // slice :- copies a portion of array 

 console.log( fruits.slice())
 console.log(fruits.slice(1,4))

 //splice :- remove/ replace/ add elemennts in the original array, slice dont change the original array but splice do

//sort in array :- sort in according in asscending or descending , js change any given  datatype in string and then sort

console.log(fruits.sort())



