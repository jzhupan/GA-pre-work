//Home work due 3/18/23


//1. 
const reSodLawn = {
    lawnLength: 25,
    lawnWidth: 30,
    sodCost: 1.45,
    additionalCost: 180,
    areaOfLawn (){
        let totalArea = this.lawnLength * this.lawnWidth;
        console.log(`The area of the lawn is ${totalArea} ft.`)
        return totalArea
    },
    sodCostNeeded (){
       let totalSodCost = this.areaOfLawn() * this.sodCost;
       console.log(`The price of Sod needed is $${totalSodCost}`)
       return totalSodCost
    },
    lawnRedoneTotalCost () {
        let redoneCost = this.sodCostNeeded() + this.additionalCost;
        console.log(`The total cost to have your lawn redone is $${redoneCost}`)
        if(redoneCost <= 1100){
            console.log(`The cost to redo the lawn is $${redoneCost}$, you saved $${1100 - redoneCost}.`)
        } else {
            console.log(`The cost to redo the lawn is $${redoneCost - 1100} more than your budget.`)
        }
        
        return redoneCost
    },
}

// reSodLawn.areaOfLawn()
// reSodLawn.sodCostNeeded()
// reSodLawn.lawnRedoneTotalCost()


//2. Overtime Calculator

const hourlyPayment = 25
const overTimePay = hourlyPayment/2
const hoursWorked = 35

// if (hoursWorked < 40) {
//     console.log(`You worked ${hoursWorked} hrs, you made $${hoursWorked * hourlyPayment} this week.`)
// } else if ( hoursWorked === 40) {
//     console.log(`You worked ${hoursWorked} hrs, you made $${40 * hourlyPayment}.`)
// } else if (hoursWorked > 40) {
//     console.log(`You worked ${hoursWorked} hrs, you made $${(40 * hourlyPayment + (hoursWorked - 40) * overTimePay)}.`)
// }



//3. Century From Year


function whatCenturyAmIAt (year) {
    if(year >= 1 && year <= 99) {
        console.log('You are in the first century')
    } else if ( year >= 1801 && year <= 1900){
        console.log('You are in the 19th century')
    } else if (year >= 1901 && year <= 2000) {
        console.log('You are in the 20th century')
    } else {
        console.log('You are from the future')
    }
}

//whatCenturyAmIAt(2000)



//4. Palindrome tester
//Palindrome meaning: 'a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.'
/*

    This function returns true if the spring provided in the parameter is a palindrome.

*/
function palindromeTester(string) {
    string = string.split()
    return string === string.reverse()
}


// console.log(palindromeTester('bob'))
// console.log(palindromeTester('nursesrun'))
// console.log(palindromeTester('pizza'))
// console.log(palindromeTester('kayak'))




//5. function loop

const students = [
    'Alice',
    'Andrew',
    'Bartholemew',
    'Casey',
    'Damian',
    'Grant',
    'Howie',
    'Wade',
    'Kat',
    'Kim',
    'Kiu',
    'Natasha',
    'Obi',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Zhe'
  ]

  function studentsListLoop(){
    for (let i = 0; i < students.length; i++){
        console.log(`${students[i]} is ${students[i].length} letters long`)
    }
  }

  //studentsListLoop()



  //6. E-commerce mock-up

//   const objArray = [
//     {name:'pillow', price:28, inStock:true, rating:4},
//     {name:'30 carton boxes', price:35, inStock:false, rating: 2},
//     {name:'coffee cup', price:12, inStock:true, rating: 5},
//     {name:'chips', price: 4, inStock: false, rating: 3},
//     {name:'nail polish', price:7, inStock:true, rating: 5}
//   ]

//   function inStockItems(){
//     for(let i =0; i < objArray.length; i++){
//         if(objArray[i].inStock === true && objArray[i].rating > 3) {
//             console.log(objArray[i])
//         }
//     }
//   }

// inStockItems()


//7. Realtor job - needhelp
//A Realtor has contracted you to find the mean value of houses in an area. 
//The values are as follows. Create a function that finds the average, 
//and is versatile enough to perform the task if any houses are added, 
//or removed to the data.

 const houseValues = [800000, 750000, 1200000, 675000, 1000000, 880000, 
    1300500, 975000, 780000, 1305000, 9000000]

 function realtorGig(){
    const houseMean = houseValues.reduce((a,v)=> {
        return a + v
    },0)/houseValues.length;

    console.log(houseMean)
 }

//   houseValues.pop()
//   houseValues.shift()
//   console.log(houseValues)
    
  realtorGig()








