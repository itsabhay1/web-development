// console.log("hello world")
// // alert("hello");
// let x = 5;
// console.log(x);
// let o = {name: "hi", salary: "1000crore"
// };
// console.log(o)

// let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
    
// }

// const func1 = (x)=>{
//     console.log("I am a arrow functionf",x)
// }

// func1(45);

// let his = "heloo"
// let hname = "mine"
// console.log(`${his}, This is ${hname}`)

// arr = [1,2,3,4,5,6,7,8]
// console.log(arr)

// let a1 = [1,2,3,4]
// let a2 = [5,6]
// let a3 = [7,8,9]

// let a4 = [6,4,7,9,2,5,1,0,,3,7,8,4,2]

// let a = [4.6,234,545,34,52,89,26]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    

// a.forEach((value,index arr) => {
//     console.log(value,index,arr)
// });

// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// } 

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
        
//     }
// }

// let a = [2,46,89,336,,7,56,53,5]

// for (const element of a) {
//     console.log(element)
// }


// arr = [1,4,6,9,11,25]
// narr = []
// for (const key in arr) {
//     if (Object.prototype.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         narr.push(element**2)
//     }
// }
// console.log(narr)

// let narr = arr.map((e)=>{
//     return e**2
// })
// console.log(narr)

// let someno = 33
// let nst = String(someno)
// console.log(nst);
// console.log(typeof nst);


// console.log(undefined>=0);

// const array = [2,5,7,[6,8],3,9,5,3,[43,55,[56,78,96,43]]]
// const newArray = array.flat(Infinity)
// console.log(newArray);

// console.log(Array.isArray("Hello"));
// console.log(Array.from("Hello"));
// console.log(Array.from({Name:"Hello"})); // provides empty array

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));



// const hi = ['mi', 'hero', 'boy', 'brotherhood']
// const ma = ['nee', 'helloji', 'hmm']
// const newArray = [...hi, ...ma]  //spread operator
// console.log(newArray);

// ******************** OBJECTS ***************************

// const Jsuser = {
//     Name: "himanshu",
//     "full Name": "himanshu hi",  //can't be print by direct writing this after . ||  accessed only by square brackets
//     Age: 18,
//     location: "India",
//     email: "himanshu@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Sunday", "Monday"]
// }

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full Name"]);


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }
// const {courseInstructor: instructor} = course    //taking courseInstuctor from course
// console.log(instructor);


//*********************************** Function ************************************************************8 
// function myDetails(){
//     console.log('h');
//     console.log('e');
//     console.log('l');
//     console.log('l');
//     console.log('o');
//     console.log('j');
//     console.log('i');
// }
// myDetails()

// 

//>>>>>>>>>>>>>>>>>>>>>>>> This And Arrow Function >>>>>>>>>>>>>>>>>>>>>>
// const user = {
//     userName: "Hitesh",
//     price: 999,
    

//     welcomeMessage: function() {
//         console.log(`${this.userName}, welcome to world`);
//         console.log(this);  // here this shows the current object values
        
//     }
// }

// user.welcomeMessage()
// user.userName = "Sam Altman"
// user.welcomeMessage()

// console.log(this);  // here this shows empty value as it is engine(not any globally declared object) but in browser it shows window object

// function chai() {
//     let user = "hetandsh"
//     console.log(this);
    
// }
// chai();

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     // console.log(this);
//     // console.log(this.username);   
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5));

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(5,6));

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2,4));

//*********************************  Imediately Innvoked Function Expressions ************************************8

// (function chai() {             //named IIFE
//     console.log(`DB CONNECTED`)
// })();                //to prevent pollution from global scope we use IIFE (in simple meaning jo function turnat execute ho jaye)
// // IIFE function does not know where to end so we have to put termination mark(;) to tell this otherwise another IIFE function wroitten below it doesn't start gives error

// ((name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
    
// })('hitesh')


// #########################################  REDUCE METHOD ####################################################


// myNum = [2,4,56,7,8]

// const total = myNum.reduce( function(accumlator, currentValue){
//     console.log(`accu: ${accumlator} and currVal: ${currentValue}`);
    
//     return accumlator + currentValue
// },0)

//const total = myNum.reduce( (accu, currVal) => accu+currVal, 0)   // Using Arrow function
// console.log(total);
