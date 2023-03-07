//.forEach

// const numbers = [1, 2, 3, 4, 5]

// // for(let i = 0; i < numbers.length; i++) {
// //  console.log(numbers[i] ** 2)
// // }

// numbers.forEach((number)=>{
//   console.log(number += 5)
// })

//real life example
// items.forEach((item)=>{
//   let totalPrice = item.price * 1.08
//   console.log(`$${totalPrice}`)
// })

//.map - can be used to showcase the items in a shop, mapping through data image, product name, price, rating, etc 

const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

// words.map((word)=>{
//   console.log(`${word} is ${word.length} letters long`)
// })

// words.forEach(()=>{})
// words.map(()=>{})
// words.filter(()=>{})

//.filter
// const shortWords = words.filter((word)=>{
//   return word.length <= 3
// })

// console.log(shortWords)

// const longWords = words.filter((word) => {
//   return word.length > 3
// })

// console.log(longWords)


//.reduce - shoppingcart function

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const sum = numbers.reduce((accumulator, value) => {
//   return accumulator + value
// }, 0)

// console.log(sum)


//.some hall of fame, assets for portfolio, athletes name, SAT scores to see who is over 15, baseball stats, stocks, games, market cap...

const greaterThanThree = numbers.some((num) => {
  return num > 13
})

//console.log(greaterThanThree)

const filteredAndMappedNumbers = numbers.map((num)=>{
  return num + 1
}).filter((num) => {
  return num % 2 === 0
})

//console.log(filteredAndMappedNumbers)


//Amazon: On Amazon's website, the .some() method is used to check if an item is in stock before allowing a user to add it to their cart. If at least one seller on Amazon has the item in stock, the "Add to Cart" button is enabled. - Bonny