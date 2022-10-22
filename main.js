let variable1= 1
const pi= 3.1416
console.log('The variable and the constant is', variable1, pi)

array1= [1,2,3,4,'4343']
console.log('The 1st version of the array is',array1)
array1.push('ABC')
console.log('The Array after pushing a new element', array1)
array1.pop()
console.log('The Array after poping the last element', array1)
console.log('The Array after Spreading',...array1)

let [first, second, third]= array1
console.log('After Array Destructuring',first, second, third)

let ghost= second.toString()+third.toString()
console.log('After Destructuring the Object Ghost', ghost)

console.log(`Hi i am Ghost and I am ${ghost} years old`)
