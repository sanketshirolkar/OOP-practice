// let object = {};

// object.me = "sanket";

// console.log(object.prototype);

// let o1 = Object.create({x, y});
// console.log(o1);

// let addr = "";
// let customer = {"address1":"Sanket", "address2":"Sanket", "address3":"Sanket", "address4":"Sanket"};

// //console.log(customer[`address`]);

// for(let i = 1; i < 5; i++) {
//     addr += customer[`address${i}`] + "\n";
//     //console.log(addr);
// }

// console.log(addr);



// let o = {x:1};               // o inherits object methods from Object.prototype
// //o.x = 2;                  // and it now has an own property x.
// let p = Object.create(o); // p inherits properties from o and Object.prototype
// console.log(p);
// p.x = 10;
// console.log(p.x);
// console.log(o.x);
// p.y = 2;                  // and has an own property y.
// let q = Object.create(p); // q inherits properties from p, o, and...
// q.z = 3;                  // ...Object.prototype and has an own property z.
// let f = q.toString();     // toString is inherited from Object.prototype
// console.log(q.x + q.y  ); q.x + q.y                 


let o = { x: 1 }.toString();
console.log(o);
// //o.y = 2;
// console.log(o.hasOwnProperty("x")        ); // => true: o has an own property x
// console.log(o.hasOwnProperty("y"));       // => false: o doesn't have a property y
// o.hasOwnProperty("toString") // => false: toString is an inherited property



// let target = {x: 1}, source = {y: 2, z: 3};
// for(let key of Object.keys(source)) {
//     target[key] = source[key];
// }
// console.log(target); // => {x: 1, y: 2, z: 3}
