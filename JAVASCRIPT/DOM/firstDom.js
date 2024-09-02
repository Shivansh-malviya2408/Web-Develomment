// <!---   -   --  --  --  --- --   Changing IMAGES/Photos in every second -  --  --  --  --  --  --  ----    --- --  -->


// let arr =[ 
//     'https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_640.jpg',
//     'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
//    'https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_640.jpg',
//     'https://cdn.pixabay.com/photo/2023/03/14/12/04/flowers-7852194_640.jpg'

// ]

// let imgEi=document.querySelector('img')

// imgEi.style.height='400px';
// imgEi.style.width='400px'
// console.log(imgEi);

// let num=0;

// setInterval(function(){

//     imgEi.setAttribute('src',arr[num])
//     // console.log(imgEi.getAttribute('src'));
//     num= (num+1)% arr.length;
// },500);

// //  console.log(arr[0]);


//  -   -   -   -   -   -   -   -   -   -   -   -   -   -- Practise For Creating Element -   -   -   -   -   -

const divBlock = document.querySelector('div');

const crEle = document.createElement('div')
crEle.innerText = 'this is First Inner Element'
// console.log(crEle);

const crEle2 = document.createElement('div')
crEle2.innerText = 'this is Second inner element Element'
// console.log(crEle);

divBlock.innerText = 'this is First Div Element'

divBlock.append(crEle, crEle2);

// console.log(divBlock);

const crEle2Block = document.createElement('span');
crEle2Block.innerText = 'This is first child of second inner block';

crEle2.appendChild(crEle2Block);
console.log(divBlock);

//  -   -   -   -   -   -   -   -   -   -   -   -   -   -- Practise For Events -   -   -   -   -   -


const nomButton = document.querySelector('button')

// function print()
// {
//     console.log('button clicked');
// }

// nomButton.onclick=function()
// {
//     console.log('button clicked');
// }

nomButton.addEventListener('click', () => {
    console.log('addEventListener Button Clicked');
})

//  -   -   -   -   -   -   -   -   -   -   -   -   -   -- Practise For Input Events -   -   -   -   -   -

const inputDiv = document.getElementById('inputDiv')

const input = document.querySelector('input')
input.addEventListener('input', (obj) => {
    // console.log('Input Entered');
    // console.log(obj.target);
    console.log(obj.target.value);
    inputDiv.innerText = obj.target.value;
    // console.log(obj.target.type);

})

//  -   -   -   -   -   -   -   -   -   -   -   -   -   -- Practise For Form Events -   -   -   -   -   -


const form = document.querySelector('form');
// const formButton = document.getElementById('form-button');
const formInput = document.getElementById('form-input');
const formDiv = document.getElementById('form-div')


form.addEventListener('submit', (obj) => {
    obj.preventDefault();
    console.log('form Submitted');
    console.log(formInput.type);
    // console.log(formInput.value);
    formDiv.innerText = formInput.value;
})


// console.log('Type of Input:- '+ formInput.type);

console.log(formInput.value);


// Adding List of Input ( TO-DO LIST )


let listInput = document.getElementById('li-input')
let listButton = document.getElementById('li-button')
let orderList = document.getElementById('li')
let remove = document.getElementById('remove')


listButton.addEventListener('click', () => {

    let list = document.createElement('li');

    list.innerText = listInput.value;
    orderList.appendChild(list);

    listInput.value = '';

    list.addEventListener('click', () => {
        list.remove();
    })

 

})

 











