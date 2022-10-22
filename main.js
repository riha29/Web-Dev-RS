// let variable1= 1
// const pi= 3.1416
// console.log('The variable and the constant is', variable1, pi)

// array1= [1,2,3,4,'4343']
// console.log('The 1st version of the array is',array1)
// array1.push('ABC')
// console.log('The Array after pushing a new element', array1)
// array1.pop()
// console.log('The Array after poping the last element', array1)
// console.log('The Array after Spreading',...array1)

// let [first, second, third]= array1
// console.log('After Array Destructuring',first, second, third)

// let ghost= second.toString()+third.toString()
// console.log('After Destructuring the Object Ghost', ghost)

// console.log(`Hi i am Ghost and I am ${ghost} years old`)


// 2nd class

// function-01
function sum(x,y) {
    // console.log(x+y)
    return (x+y)
}
// let ok= sum(10,5)
// console.log(ok)
// console.log(sum(10,5))

// function-02
let sum1 = (x,y) => x+y
// console.log(sum1(100,50))

// function-03
let sum2 = (x,y) => {
    return x+y
} 
// console.log(sum2(100,50))


const iHave= 50

// if (iHave>=50) {
//     console.log('I am rich')
// }
// else if(iHave<50 && iHave>=40) {
//     console.log('Not so rich')
// }
// else {
//     console.log('I am poor')
// }

// iHave >=50 ? console.log('I am rich') : console.log('I am poor')

const arr = ['aaa', 'bbb', 'ccc', 'ddd']
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }


// map only uses for array
// arr.map((value)=> {
//     console.log(value)
// })

// // showing index
// arr.map((value, index)=> {
//     console.log(index, value)
// })


// import-export

import {sayMyName} from './main1.js'

sayMyName('ewww')

