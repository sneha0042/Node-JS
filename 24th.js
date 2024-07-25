let array=[1,2,3,4,5]
let print=array.forEach((itr)=>{
    console.log(itr)
})

//using map method to create new array
let array1=[1,2,3,4,5,6,7,8,9]
let doubled_array=array1.map((itrtr)=>{
    return itrtr*2
    
})
console.log(doubled_array)

//
// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); 

//using reduce finding sum of elements in an array
let array3=[1,2,3,4,5]
let sum=array3.reduce((acc,iter)=>{
    return acc=acc+iter
},0)
console.log(sum)

// using find method
let person=[
    {
        name:"Dhanush",
        marks:52
    },
    {
        name:"Srujan",
        marks:39
    },
    {
        name:"Abhi",
        marks:60
    }
]
let personName=person.find((persons)=>persons.marks<40)
console.log(personName.name)

//using findindex method
let students=[
   
    {
        name:'potti',
        age:'29'
    },
    {
        name:'laddu',
        age:'32'
    },
    {
        name:'chocolate',
        age:'28'
    },
    {
        name:'chinni',
        age:'20'
    },
    {
        name:'sindhu',
        age:'37'
    },
    
]
let findindex=students.findIndex((students)=>students.age>20)
console.log(findindex)
