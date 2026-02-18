
/*

//object literal


const Jsuser={
    name:"Techno",
    age:25,
    location: "Bhopal",
    email: "tit2026a@gmail.com"
}

//console.log(Jsuser.email)  // yanha . ke sath h to js khud smj jaega ki email string h, but yadi dot n diye to btana hoga string h joki niche kiya hua h
//console.log(Jsuser["email"])

Jsuser.email="titcollege@email.com"   //updation of value
//console.log(Jsuser["email"])

//Object.freeze(Jsuser)  //locking of value ( it is done only for obj.) aftr locking the value of obj. the value in the object cant be changed..
//Jsuser.email="titcollege@google.com"
//console.log(Jsuser["email"])


Jsuser.greeting = function(){
console.log("Hello Js User");
}
console.log(Jsuser.greeting());


Jsuser.greeting2 = function(){
console.log(`Hello Js User, ${this.name}`);
}
console.log(Jsuser.greeting2());



-------------------------------------------------------------------------------

*/

// declaration of object using constructor / singelton

const tinderUser = new Object()

tinderUser.id = "123asdf"
tinderUser.name = "Samy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const flipkartUser={
    email: "flipuser@mail.com",
    fullname:{       //object me object means nesting obj
        username:{
            firstName:"Raj",
            lastName:"Kumar"
        }
    }
}

//console.log(flipkartUser)
//console.log(flipkartUser.fullname.username.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2};
//console.log(obj3)  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3 = Object.assign(obj1, obj2);   // Object.assign(target, source);

//const obj3 = {...obj1, ...obj2}   //by spreading the source objects(obj1 , obj2) and collecting into target(obj3)

//console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser)); // return the key of the obj
console.log(Object.values(tinderUser));  // return the values
console.log(Object.entries(tinderUser));  // return the values as array in array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to check whether the value is on obj or not
console.log(tinderUser.hasOwnProperty('sallery'));  
