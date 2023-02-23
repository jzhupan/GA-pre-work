//Conditionals and Loops Lab
//Prompt 1 - Weather Report

// let temperature = 79

// if (temperature > 75){
//   console.log(`it's warm`)
// } else {
//   console.log(`it's cold`)
// }




//Prompt 2 - Team Player

// let softballTeam = ['Amelia', 'Teresa', 'Michele','Marcela', 'Bella', 'Alex', 'Jenny', 'Lily', 'Kelly']

// //softballTeam.pop()

// if (softballTeam.length >= 9){
//   console.log('Play ball!')
// } else {
//   console.log('Not enough players')
// }




//Prompt 3 - Grade Assigner

// let grade = 0

// if (grade >= 90){
//   console.log('A')
// } else if (grade >= 80 && grade <= 89) {
//   console.log('B')
// } else if (grade >= 70 && grade <= 79){
//   console.log('C')
// } else if (grade >=65 && grade <=69) {
//   console.log('D')
// } else if (grade < 65 && grade >= 0){
//   console.log('You got an F. Shame on you. Retake the class and study harder!')
// } else {
//   console.log('Please enter a valid grade')
// }



//Prompt 4 - ATM Function

let checkingAccount = 500
let savingsAccount = 100
let actionType = 'Transfer'

switch (actionType) {
  case 'Withdraw':
    console.log(`You have withdrawn $100 from your checking account, you now have a total of $${checkingAccount - 100} in your checking account.`)
    break
  case 'Deposit':
    console.log(`You have deposited $100 to your checking account, your total is $${checkingAccount + 100}.`)
    break
  case 'Transfer':
    console.log(`Transfered $100 from your checking to your savings account. Your checking account total is $${checkingAccount - 100}. Your savings account total is $${savingsAccount + 100}.`)
    break
}