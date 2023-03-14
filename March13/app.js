console.log('hello world')

//working with DOM manipulation

//there are 2 parts t this idea
//Getters and Setters

//Getters will pull HTML elements into our JS block

//Setters will control and shape them

//we've used Data Attributes for HTML and CSS


//Classes were ->   .
//IDs were ->   #

//luckily JS uses the same characters

//Prompt activation :
let name = prompt('what is your name?')

console.log(name)

//This is our Getter -> a query we can make to select an HTML element 
//and bring it to our JS system
let title = document.querySelector('#title')

//this is our Setter
//it is going to Set HTML content based on our JS codes
title.innerText = `Hello ${name}!`


//Final challenge -> Make an empty H3 with an id of 
//"dayOfWeek", make a prompt thats for the day of week, 
//and sets that h3 to say "have a nice day of the week"

let day = prompt('what day is it today?')
console.log(day)

let dayOfWeek = document.querySelector('#dayOfWeek')

dayOfWeek.innerText = `Have a great ${day}!`
