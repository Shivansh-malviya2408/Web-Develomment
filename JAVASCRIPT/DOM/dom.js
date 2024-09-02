

 //--  -- -- -- --  DOM (Document Object Model) is used to change and modify the element/object and structure of document of a Web  --- --- -- --- -- --- -- 

        // console.log(window.document); 
        // console.log(document);

        // console.log(document.querySelector('span').innerHTML);


 //--  -- -- -- --  innerHTML is used to get the content of element and the inner tags or element of that element --- --- -- --- -- --- -- 
        // console.log('innerHtml = ' + document.querySelector('a').innerHTML);

// --  -- -- -- -- innerText is used to get the content of element and content of inner tags... but it ignores the spaces, the inner HTML tags and css of the element
        // console.log('innerText = ' +document.querySelector('a').innerText);

 // --  -- -- -- --  textContent is used to get the content of element but does'nt ignores the spaces and css of the element but it
        // console.log('textContent = ' +document.querySelector('a').textContent);

         
// --  -- -- -- - querySelector is used to select the  element of the giving element in that method, it always select the first element

        //  let paraColor = document.querySelector("p") 
        //  console.log(paraColor);
        //  paraColor.style.backgroundColor='green'
        // console.log( paraColor.style.backgroundColor='green');
        // console.log(paraColor.getAttribute('class'));

    
// --  -- -- -- --  querySelectorAll is used to select all the element of the giving element in the method... it creates a type of array of all the element so we can access the particular element using index number..also we can find the length of that...

        // let allPara=document.querySelectorAll('p');

        // let arr=['red','yellow']
        
         
        // for (let i=0; i<allPara.length; i++)
        // {
        //     allPara[i].style.backgroundColor=arr[i];
        // }


// --  -- -- -- --  getElementbyId is used to select the element by Id

        // document.getElementById('demo').innerText= 'Your Kabir';


//  -   -   -   -   - Creation of Element in HTML document------
  // createElement() is used to create the element externally in the html document , by using JavaScript...

 //appendChild() is used to append / add the child in the element




        //  let div=document.querySelector('div');
        // // div.innerText='Hello,this is div element'
        //     // div.innerText='this is div element'

        //  let span= document.createElement('span')
        //    let h1=document.createElement('h1') 
        //     h1.innerText='this is h1 tag'
        //  span.innerText='Hello, this is span tag...' 

        // //  div.appendChild(span)

        //  console.log(div);

        //  div.append(span,h1)
        // //  console.log(div);



//  -   -   - - -   -   -   -   -   Event in JS -  - -  -   -   --  -   -




        // First Method

        // function fun1()
        // {
        //     console.log(' First method button element clicked');
        // }

        // Second Method

        // let btn=document.querySelector('button')
        
        // btn.onclick=function ()
        // {
        //     console.log(' Second Method button element clicked'); 
        // }

        // Third Method

        // let btn=document.querySelector('button')

        // btn.addEventListener('click',()=>
        // {
        //     console.log("Third Method Button Clicked");
        // })

      
      
// <!-- -   -   -   -Input Event in JavaScript  -   -   -   -   - -->

            // let inp=document.querySelector('input')

            // let divInput = document.querySelector(
            // 'div'
            // )

            // inp.addEventListener('input',(obj)=>
            // {
            //     // console.log("type");
            //     console.log(obj.target.value);
            //     console.log(obj.target.type);
            //     divInput.innerText=obj.target

            // }
            // )


// <!-- -   -   -   -   -Form Event in JavaScript - -   -   -   -   --->


            //     let form=document.querySelector('form')
            //     let inp=document.querySelector('input')
            //    let formDiv=document.querySelector('h1' )
            //     form.addEventListener('submit',(obj)=>
            //     {
            //         obj.preventDefault();
            //         console.log('form submiitted');
            //         // console.log(inp.value);
            //         formDiv.innerText=inp.value
            //     })

 
    






