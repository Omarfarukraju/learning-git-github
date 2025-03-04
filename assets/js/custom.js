

// let myObj1 = {
//   name: 'omar',
//   address: 'noakhali'
// }

// let test = new Object({
//   name: 'omar',
//   address: 'noakhali'
// });


// console.log(myObj1,test);


// function name1 () {
//   console.log(arguments);
// }

// name1(10, 20);

// let myFun = new Function("p1", "p2", "return p1 + p2");

// // let myFun = new Function("p1", "p2", "return p1 + p2");

// console.log(myFun(10,20));


// (function(){
//   console.log(20+30);
// }())



let myObj = {
  fName: 'omar faruk',
  lName: 'raju',
  fullName: function() {
    return this.fName  + ' ' + this.lName;
  }
}

let myName = myObj.fullName();

console.log(myName);


