//while loops
let n = 0

while(n < 10) {
  console.log(n)
  n++
}



//for loops
for (let i =0; i <20; i++){
  console.log(i)
}

for (let i =10; i < 30; i+=3){
  console.log(i)
}


let foods = ['sushi', 'pizza', 'pad thai', 'bbq', 'chocolate cake', 'sandwiches', 'chicken']

for(let i = 0; i < foods.length; i ++) {
  console.log(`${foods[i]} is my favorite food`)
}

             
            
const wizards = [
  {name: "Harry Potter", house: "Gryffindor"}, 
  {name: "Lord Voldomort", house: "Slytherin"}, 
  {name: "Cedric Diggory", house: "Hufflepuff"},
  {name: "Luna Lovegood", house: "Ravenclaw"},  
  {name: "Albus Dumbledor", house: "Gryffindor"}, 
  {name: "Merlin", house: "Slytherin"}, 
  {name: "Pomona Sprout", house: "Hufflepuff"}, 
  {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
  {name: "Ron Weasley", house: "Gryffindor"}, 
  {name: "Severus Snape", house: "Slytherin"}, 
  {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
  {name: "Padma Patil", house: "Ravenclaw"}, 
  {name: "Hermoine Granger", house: "Gryffindor"} 
 ]

for (let i = 0; i < wizards.length; i ++) {
  if (wizards[i].house != "Slytherin") {
    console.log(wizards[i].name)
  }
}

//Functions and Scope

//we have to define a function, and then we call it
//we can give Parameters to use, and then Arguments to pass in

//declaring a function. Giving it a Parameter


function sayHello (name) {
    console.log(`hello ${name}`)
  }
  //calling the function. giving it an Argument
  sayHello('Jennie')
  sayHello('Anyi')
  sayHello('Melisa')
  
  //Older way of writing a function
  // function addNums (num1, num2) {
  //   console.log(num1 + num2)
  // }
  
  //Modern way => Arrow functions
  const addNums = (num1, num2) => {console.log(num1 + num2)}
  
  addNums(100,200)
  addNums(10,5)
  addNums(10,20)
  
  const calculateArea = (l, w) => {console.log(l*w)}
  
  calculateArea(5,8)
  
  //parameters and arguments should ALWAYS match up in order
  const greetUser = (firstName, lastName, year, city) => {
    console.log (`Hello ${firstName} ${lastName}, it is ${year} in ${city}.`)
    }
  
  greetUser('Jennie', 'Zhu', 2023, 'Lynn')
  
  
  //Two kinds of Scioe -> Global and Local
  //Global Scope can be passed down locally
  //Local scope can NOT be passed up grobally
  
  const name = "Jennie"
  const age = 36
  //age will pass into Local scope -> going downwards
  {
    const name = "not Jennie"
    const favoriteFood = 'sushi'
    console.log(name,age)
  }
  //this is a Sibling to our other block of Local scope
  //data can NOT pass between siblings
  {
    const age = 37
    console.log(name, age)
  }
  //favoriteFood will NOT pass into global scope moving upward
  //it comes back as undefined
  console.log(name, favoriteFood)
  
  
  //Small individual Lab
  
  // Redoing the bathroom! Write a function that finds the areaInSqFt of a bathroom by taking 2 numbers - length and width - and multiplying them together. If tiles cost $2.15/sf, have your function print out how much it will cost to redo a bath room with a Length of 12ft and a width of 10ft
  
  let bathroomRenovationCost = (length, width) => {
    const areaInSqFt = length * width
    const CostPerSqFt = 2.15
    const totalCost = areaInSqFt * CostPerSqFt
    console.log(`To redo a bathroom with a length of ${length}ft and a width of ${width}ft, in ${areaInSqFt} square feet of tiles, will cost you a total of $${totalCost}.`)
  }
  
  bathroomRenovationCost(12,10)

  //Write a function that loops over the following array of SEI students and prints out their name, and how many letters their name is

const students = [
  'Alice',
  'Andrew',
  'Casey',
  'Damian',
  'Grant',
  'Howie',
  'Wade',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Zhe'
]
//should give us "Alice is 5 letters long"... and so on

const studentsNames = (students) => {
  for(let i = 0; i < students.length ; i++) {
    console.log(`${students[i]} is ${students[i].length} letters long`);
  }
}

studentsNames(students);