import navbar from './components/navbar.js'
import {getData , displayData} from './scripts/script.js'
document.getElementById("navbar-container").innerHTML=navbar();

let main= async()=>
{
 let elecProducts=  await getData("https://fakestoreapi.com/products/category/jewelery")
 displayData(elecProducts)
}

main();