const sayHi=()=>
{
    console.log("Hi");
}
let arr=[4,5,12,19,15];
// one way to to that
// const avg=(Arr)=>
// {
//     const sum=Arr.reduce((total,elem)=>
//     {
//        return (total+elem)
//     })
//     return sum;
// }

// Another way to do that
const avg=(Arr)=>
{
    const sum=Arr.reduce((total,elem)=> total+elem )
    return sum/Arr.length;
}
console.log(avg(arr));

export default avg;
/*
  ## DRY Principle :
	DRY: Don't Repeat Yourself is a principle of software development that aims at reducing the repetition of patterns and code duplication to prevent redundancy; Less code is always good, it saves time and effort; it is easy to maintain and also reduces the chances of bugs;

	## Modules: A block of code which can be re-usable acrosss multiple files
	## Types of exports
		- default export --only for one export statement syntax :export default avg
		- named export   -- two or more functions to exports syntax : export{avg,anotherfunction}
*/