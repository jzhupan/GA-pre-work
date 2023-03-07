// HOF Lab
// 1. forEach

numsArray = [1, 2, 3, 4, 5]
function printNums(){
  numsArray.forEach((num) => {
    console.log(num + 10)
  })
}

printNums()




//2. map
const numsArray = [1,2,3,4,5,6]

numsArray.map((nums) => {
  console.log(nums ** 2)
})




//3. print money
const moneyArray = [12.34, 9.99, 3.14159, 4.234, 5.50]


const printMoney= moneyArray.map((money) => {
  return `$${money.toFixed(2)}`
})

console.log(printMoney)




//4.
array = [1,2,3,4,5,6,7,8,9,10]

 const arrayBoolean = array.map((nums) => {
    if(nums % 3 === 0){
      return true
    } else {
      return false
    }
  })

console.log(arrayBoolean)