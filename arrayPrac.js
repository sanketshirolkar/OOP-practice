// let arrayOne = ["Sanket"];
// let string = "";

// for(let strings of arrayOne)
// {
//     string = string + strings;
// }
// console.log(arrayOne, string);

// // let a = Array();
// console.log(a);


// function func(a){
//  return (function(){
//    console.log(a);
//    a = 6;
//  }) ();
// }

// func(21);

function solve(arr, rotations){
 if(rotations == 0) return arr;
 for(let i = 0; i < rotations; i++){
   let element = arr.pop();
   arr.unshift(element);
   console.log(arr);
 }
 
 return arr;
 
}
solve([44, 1, 22, 111], 5);


// 111, 