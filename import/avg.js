let arr=[22,56,45,99,100];

//Normally we do copying the same functions and to do these kind of things

// const avg=(Arr)=>
// {
//     const sum=Arr.reduce((total,elem)=> total+elem )
//     return sum/Arr.length;
// }
// console.log(avg(arr));

// here we just need to import that function no nedd to repeat those things

import avg from "./index.js";
console.log(avg(arr));
/*
	./: Current folder
	../: Parent folder
	/: Child folder
*/

// named import syntax: import{avg,some function} from "./index.js"

