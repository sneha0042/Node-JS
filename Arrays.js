let array = [1,3,5,7]
console.log(array)

//using push function on main array 
array.push(9)
console.log(array)

//using shift and unshift functions on array
array.shift(0)
array.unshift(2)
console.log(array)

//using silent function on array
array.slice(3, 7) 
console.log(array)

//using splice function
let flowers = ["Rose", "sunflower", "lotus", "lavender"];
flowers.splice(5, 9, "snowdrop", "bluebell");
console.log(flowers);

//
let shirts = {
    Brand: "Netplay",
    type: "Casual",
    year: 2006
};
console.log(shirts);

delete shirts.type;

console.log(shirts)


// Create an object representing a person
let person = {
    name: "Dinesh Kumar",
    age: 18,
    address: {
        street: "sai-nagar",
        city: "Hyderabad",
        zipcode: "500013"
    }
};
console.log(person);
console.log(person.address.city);


// Arrow function named greet
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Sneha"));



/*Output:
[ 1, 3, 5, 7 ]
[ 1, 3, 5, 7, 9 ]
[ 2, 3, 5, 7, 9 ]
[ 2, 3, 5, 7, 9 ]
[ 'Rose', 'sunflower', 'lotus', 'lavender', 'snowdrop', 'bluebell' ]
{ Brand: 'Netplay', type: 'Casual', year: 2006 }
{ Brand: 'Netplay', year: 2006 }
{
  name: 'Dinesh Kumar',
  age: 18,
  address: { street: 'sai-nagar', city: 'Hyderabad', zipcode: '500013' }
}
Hyderabad
Hello, Sneha!*/