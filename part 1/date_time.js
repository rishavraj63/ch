
 let myDates = new Date()
//  console.log(myDates)
//  console.log(myDates.toString())
//  console.log(myDates.toDateString())
//  console.log(myDates.toLocaleString())
//  console.log(typeof myDates)


// let myCreatedDate = new Date(2023, 0, 23) //in js months starts from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDateTime = new Date(2023, 0, 23, 5, 3) 
// console.log(myCreatedDateTime.toLocaleString());


 let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now();

console.log(myTimeStamp);   // 1JAN 1970 SE AAJ TK KA mili second 
//console.log(myCreatedDate.getTime());
console.log(Math.floor((myTimeStamp)/1000));  //divided ms by 1000 and floor value of the divison to get second 