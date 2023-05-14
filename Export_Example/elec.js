import navbar from './components/navbar.js'
import {getData , displayData} from './scripts/script.js'
document.getElementById("navbar-container").innerHTML=navbar();

let main=async()=>
{
 try
 {
    let elecProducts= await getData("https://fakestoreapi.com/products/category/electronics")
 displayData(elecProducts)
 }catch(err)
 {
    console.log(err);
 }
}

main();

