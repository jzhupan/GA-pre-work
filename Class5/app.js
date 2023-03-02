// 3/1  - 5 Minute Practice problem: Mock Login: Create a variable called isLoggedIn and assign it a boolean value. Then create a function that takes a userName as a parameter and logs "Please Log In" if your variable is False, and "Welcome /userName/" if it is true. Pass the userName as an argument when you call the function.

// let isLoggedIn = false
// let loggedInTest = (userName) => {
//  if(isLoggedIn === true){
//    console.log(`Welcome ${userName}`)
//  } else {
//    console.log('Please Log In')
//  }
// } 

// loggedInTest('Jennie');

//OBJECTS
//creating JS Objects
//using a special kind of Notation
//called JS Object Notation
//JSON for short

//an array is defined by []
//an object uses {}
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2019,
    mpg: 27.5,
    price: 12000,
    canFly: false,
    inStock: false,
    isRegistered: true,
    keyLessIgnition: false,
    availableColors: ['silver', 'red', 'black'],
    drive() {
      console.log(`Vroom vroom`)
    },
    interior: {
      material: "leather",
      colors: ['black', 'grey', 'tan'],
      hasNewCarSmell: true,
    }
  }
  
  //car.drive();
  
  //console.log(`The ${car.availableColors[0]} ${car.year} ${car.make} ${car.model} costs $${car.price}`)
  
  //console.log(car.interior.colors)
  
  //CRUD
  //Create
  //Read
  //Update -> add new properties, or we can change them
  //Delete
  
  //make and call this function with a conditional
  //if the car is In Stock we log to the console the Make, Model, Color, and Price
  //if car is not In Stock we log to the console 'Car not in stock'
  
  // car.inStock = true
  
  // let carInStockChek = () => {
  //   if (car.inStock === true) {
  //     console.log(`The ${car.make} ${car.model} in ${car.availableColors[1]} is $${car.price}.`)
  //   }  else {
  //     console.log('Car not in stock')
  //   }
  // }
  
  //carInStockCheck();
  
  //Single Line Conditional beautifully made by a student in class ->
  //car.inStock ? console.log(`The car is a ${car.color} ${car.make} ${car.model}, and costs $${car.price}`) : console.log("Sorry, car not in stock")
  
  
  
  
  //5 minutes to create a Mock FaceBook Profile Object
  // isLoggedIn = true
  
  // const fbProfile = {
  //   firstName: 'Jennie',
  //   lastName: 'ZP',
  //   gender: 'Female',
  //   age: 27,
  //   location: 'Lynn,MA',
  //   relationshipStatus: ['single', 'in a relationship', 'married', 'widow'],
  //   isLoggedIn = (userName) {
  //     if (isLoggedIn === true) {
  //       console.log(`Welcome ${userName}`)
  //     } else {
  //       console.log('please log in')
  //     }
  //   }
  // }
  
  // console.log()
  
  
  
  //OOP Object Oriented Programming:
  //using a Constructor to create a new Object
  //using a Class as a blueprint/template to create these Objects
  
  class Car {
    constructor(model, color, year) {
      this.model = model
      this.color = color
      this.year = year
      this.fuel = 100
    }
      drive(){
        this.fuel--
        console.log('vroom vroom')
      }
  }
  
  const diablo = new Car('Lamborghini Diablo', 'Black', 1996)
  const silverGhost = new Car('Rolls Royce Silver Ghost', 'white', 1927)
  const s8 = new Car('Audi S8', 'dark blue', 2023)
  const gtr = new Car('Nissan GTR', 'red', 2019)
  
  //console.log(s8)
  
  
  
  //Lets make a Person Class
  
  class Person {
      //We use the constructor method to initialize properties for a class instance.
    //It takes whatever arguments we want to pass into an instance.
    constructor(name, age, hobby) {
      this.name = name
      this.age = age
      this.hobby = hobby
    }
    //We define any methods accessible to an instance outside of the constructor
    speak(){
      return `Hello! I'm ${this.name} and I am ${this.age} years old and my hobby is ${this.hobby}!`
    }
  }
  
  const jeremy = new Person('Jeremy', 36, 'playing guitar')
  const jennie = new Person('Jennie', 26, 'Drawing')
  const melissa = new Person('Melissa', 30, 'Singing')
  const andy = new Person('Andy', 29, 'Playing video games')
  
  //console.log(andy.speak());
  
  
  
  
  