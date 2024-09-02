// 1.. Selecting Elements Write a JavaScript code to select all elements with the class "header" and store them in a variable.

// let a=document.querySelectorAll('.header');
// console.log(a);


// 2....Creating Elements Create a new <p> element with the text "This is a new paragraph" and append it to the <body> element.

// let p=document.createElement('p');
// p.innerText='this is p element'
// let body=document.querySelector('body')
//  body.appendChild(p);
//  console.log(body);
 


//3....<!-- Modifying Element Text Write a JavaScript code to change the text of the first <h2> element on a webpage to "New Header". -->

// let h2=document.querySelector('h2');
// h2.innerText='New Header'


//4...Removing Elements Write a JavaScript code to remove the last <li> element from a <ul> element with the id "myList".

// let ul=document.getElementById('myList')
// console.log(ul);
//  ul.lastElementChild.remove()


// Styling Elements Change the font size of all <h3> elements on a webpage to 24px.

let h3=document.querySelectorAll('h3');
 
console.log(h3.length);

for(let i in h3)
{
     h3[i].style.fontSize='4vw'
}



