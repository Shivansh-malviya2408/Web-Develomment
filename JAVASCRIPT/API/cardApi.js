let div=document.querySelector('.wrapper');
     
    

    fetch('https://dummyjson.com/recipes').then((res)=>
    {
         return res.json()
}).then((data)=>{

     console.log(data);
    //  let outerDiv=document.createElement('div');
    //  outerDiv.style.height='400px'
    //     outerDiv.style.width='400px'
    //     outerDiv.style.backgroundColor='red'
    // div.appendChild(outerDiv)


     for (let i in data.recipes)
    {
        let outerDiv=document.createElement('div');
        let innerImg=document.createElement('img');
        let innerName=document.createElement('h2');
        let innerAtt=document.createAttribute('src');
        let innerCuisine=document.createElement('h3')
        
        let allIngredient=data.recipes[i].ingredients
        console.log(allIngredient);
        innerAtt.value=data.recipes[i].image
        innerImg.setAttributeNode(innerAtt);
         

        innerName.innerText=data.recipes[i].name;
        innerCuisine.innerText=`Cuisine:- ${data.recipes[i].cuisine}`


        div.append(outerDiv)
        outerDiv.append(innerImg,innerName)
        

    }


}
)
.catch((err)=>
{
    console.log(err);
})