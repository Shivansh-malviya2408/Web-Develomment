

// console.log("hello this is array practise file");

// let arr =  [1,2,3,4,"kabir",null,false,"lily"]

// for (let i of arr)  // for of loop is used to print the value of arrr
// {
//     console.log(i);
// }


// For In loop

// It is used to to print the index value of array

// for (let i in arr)
// {
//     console.log(i);
// }


// Basic Loop

// for (let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }



// Inbuilt Function of Arrray

// let arr2 =  [1,2,3,4,"kabir",null,false,"lily"]

// arr2.pop();    // Pop function is used to remove the element from back
// console.log(arr2);


// arr2.push(100)      // Push function is used to insert the element from back
// console.log(arr2);

// arr2.shift();       //Shift function is used to remove the element from front
// console.log(arr2);

// arr2.unshift(100);      //Un-shift function is used to insert the element from front
// console.log(arr2);
 
// console.log(arr2.length);  // Length is used to find the length of array



//Another Inbuilt functions of Array -      -   --  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   --   -   ->

// For-Each Function of Array 
/*This function contain by default 3 Paramters in it*/
// For-Each Function does'nt create another array, it only returns undefined

// let newArr = [5,4,3,6,7,8];






// let eachVar= newArr.forEach((a,b,c) => {
    
//     console.log(a);//First Parameter always holds the value of array and return it.

// });

//  eachVar= newArr.forEach((a,b,c) => {
    
//     console.log(b);//Second Parameter always hold the index of array and return it.

// });

//  eachVar= newArr.forEach((a,b,c) => {
    
//     console.log(c);//Third Paramter always hold the entire array and it will return the array till the loop is executing...

// });


// Declaration for Normal function in for-Each method without storing in variable-    -   -   -   -   -   -   -   -   >

// newArr.forEach(function(a,b,c)
// {
//     console.log(a);
// })


// Declaration for Arrow function in for-Each method without storing in variable -    -   -   -   -   -   -   -   -   >

// newArr.forEach((a,b,c)=>
// {
//     console.log(b);
// }


// )

 
//<<<<<<<<<<<-   -   -   Map() functon of Array  -   -   -   -   -   -   -   -   -   -   -   -   =>>>>>>>>

    // Map() Function is used to iterate in the element of array 
    /*whenever the map function returns anything it always create new array that is the difference between 
    forEach and Map ()*/


//     let mapArr = [5,3,2,4,1];


//     let varMap=mapArr.map(function(value,index,arr)
    
//     {
//         console.log(value,index);
//          return arr;
//     }
    
//  )

//  console.log(varMap);
    



//<<<<<<<<<<<-   -   -   Filter() functon of Array  -   -   -   -   -   -   -   -   -   -   -   -   =>>>>>>>>

// Filter function is used to filter the value of array based on condition 

/*Whenever the map function returns anything,it always create new array that means it does'nt change or modify anything in the original array*/

alert("Please enter the queries to get the element of Arrray..")
let a=prompt("Do you want to Continue...Yes/No")
console.log(a);

let filterArr =  [45,32,12,10,5,7,3,22]


if(a=='yes')
{
    var printfilterArr=filterArr.filter((value)=>
{
    return value>15;
}


)
}

// else
// {
//     var printfilterArr=filterArr.filter((value)=>
//     {
//         return value<15;
//     }
//     )
// }


console.log(printfilterArr);


//<<<<<<<<<<<-   -   -   Reduce() functon of Array  -   -   -   -   -   -   -   -   -   -   -   -   =>>>>>>>>








