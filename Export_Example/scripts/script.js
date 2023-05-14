
async function getData(url)
{
    try
    {
        {
            let res= await fetch(url)
            let data = await res.json();
            return data
        }
    } catch(err)
    {
        console.log(err);
    }
}

let displayData=(data)=>
{
  data.forEach((elem)=>
  {
    let div=document.createElement("div");

    let p=document.createElement("p");

    let img=document.createElement("img");

    img.src=elem.image;

    p.textContent=elem.title;

    div.append(img,p);

    document.getElementById("display-container").append(div);

  })
}

export { getData,displayData }