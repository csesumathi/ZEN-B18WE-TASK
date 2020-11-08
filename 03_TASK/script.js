/*Do the below programs in anonymous function and IIFE*/
//01_Print odd numbers in an array
var array=[50,60,2,8,44,51,12,9]
var odd=function(){
    let arr=[]
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2!==0)
        {
            arr.push(array[i])
            console.log(arr)
        }
    }
}
odd(array)

//02_Convert all the strings to title caps in a string array
var str="i'm a little tea pot"

var strcase=function(){
    str=str.toLowerCase()
    
    str=str.split(" ")
   
    
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1)
        
    }
    return str.join(' ')
}
console.log(strcase(str))

//03_Sum of all numbers in an array
var array1=[50,60,2,8,44,51,12,9]
var sum=(function ()           //using IIFE
{
    var s=0;
    for(var i=0;i<array1.length;i++)
    {
        s+=array[i]
        
    }
    return s
})(array1)
console.log(sum)


//04_Return all the prime numbers in an array
var arr=[8,3,50, 7, 13,36, 17, 31,]

function isPrime(x)
{
    if(x===2)
    {
        return true
    }
    else if(x===3)
    {
        return true
    }
    else if(x>3)
    {
        for(var i=4;i<x;i++){
            if(x%i !==0 && x%2 !==0 && x%3 !== 0)
            return true
            else
            return false
        }
    }
}
let primeno=arr.filter(item=>{return isPrime(item)})
console.log(primeno)


//05_Return all the palindromes in an array
var paliarr=['madam','bee','lee','ablewasiereisawelba','eye']
function isPalindrome(str)
{
    var revstr=str.split('').reverse().join('')
    //console.log(revstr)
    if(str===revstr)
    {
        return true
    }
    else{
        return false
    }


}

let palin=paliarr.filter(item=>{return isPalindrome(item)})
console.log(palin)

//07_Return median of two sorted arrays of same size
var m1=[10,26,38,84]
var m2=[56,12,35,64]

var merged=[...m1,...m2].sort()
console.log('merged: '+merged)
var median=function(){
    var even=merged.length/2
    var odd=merged.length % 2
    if(odd>0)
    {
        return merged[Math.floor(merged.length/2)]
    }
    else{
        return (merged[even]+merged[even-1])/2
    }
}
console.log(median(merged))


//08_Remove duplicates from an array
var ar=[5,7,17,5,36,17,98]
var remDuplicate=function()
{
    return ar.filter((ele,item)=>ar.indexOf(ele)===item)
}

console.log(remDuplicate(ar))

//09_Rotate an array by k times and return the rotated array
var ara=[1,2,3,4,5,6]
function arrayRotate(ara,k){
   for(var i=0;i<k;i++)
   {
       ara.unshift(ara.pop())
       console.log(ara)
   }
  // return ara
}

arrayRotate(ara,7)