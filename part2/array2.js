const groupA = ["Virat", "Rohit", "Hardik"]
const groupB = ["Jasprit", "Shami", "Rahul"]

// console.log(groupA)
// console.log(groupB)

// groupA.push(groupB)
// console.log(groupA)   // o/p= [ 'Virat', 'Rohit', 'Hardik', [ 'Jasprit', 'Shami', 'Rahul' ] ]  , 
                    // here  [ 'Jasprit', 'Shami', 'Rahul' ] has become an element for groupA array


// groupA.concat(groupB)  // concat ho jaega but groupA me update nhi hoga data
// console.log(groupA)

// const player = groupA.concat(groupB)  // concat ho jaega or  groupA me update  hoga data or new array player bnega
// console.log(player)


// const player = [...groupA, ...groupB]  // concat me 2 array conacat ho raha taha, but ab kitna bhi array (no. is not fixed)
//console.log(player)

/*
console.log(Array.isArray("Techocrats"))        // check krta h arraY H ya nhi
console.log(Array.from("Techocrats"))           //create array
console.log(Array.from({name: "Techocrats"}))   //yanha declare krna pdega ki keys se array bnaana h ya value se, declare krne ke bad hi array bnta h
*/


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
