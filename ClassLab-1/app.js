//Prompt 1: Welcome Screen
let firstName = "Jennie"
let lastName = "Zhu"
let dayOfTheWeek = "Wednesday"

//console.log(`Welcome ${firstName} ${lastName}, have a nice ${dayOfTheWeek}!`)

//Prompt 2: Basic Math
let WorldCupGoals = 10
let LaLigaGoals = 15
let ChampionsLeagueGoals = 18

let totalGoals = WorldCupGoals + LaLigaGoals + ChampionsLeagueGoals

// console.log(`Messi has scored ${totalGoals} goals`)

//Prompt 3: Colors Array
let colors = ['white', 'black', 'red', 'orange', 'yellow']

let lastColor = colors.length-1

colors.splice(0,0, 'pink')
colors.push('purple')
colors.shift()
colors.pop()

//console.log(colors)

//Prompt 4: I95 Express

let newEnglandStates = ['New Hampshire', 'Maine', 'Conneticut']
let midAtlantic = ['New York', 'Pennsylvania', 'New Jersey']
let southeastStates = ['Florida', 'Georgia', 'Alabama']

let eastCoast = [...newEnglandStates, ...midAtlantic, ...southeastStates]

let westCoast = ['California', 'Oregon', 'Washington']
let southWest = ['Utah', 'Colorado', 'Arizona']
let theWest = [...westCoast, ...southWest]

let unitedStates = [...eastCoast, ...theWest]

//console.log(unitedStates)


//Prompt 5: Pythagorean Theorum
let sideA = 30
let sideB = 40

let hypotenuse = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2))

//console.log(hypotenuse)


//Prompt 6: Temperature Converter
let tempInCelcius = -40;
    
let farenheit = tempInCelcius * 1.8 + 32

let tempInFarenheit= -40;
let celsius = (tempInFarenheit - 32) * .5556 

//console.log(celsius)

//Prompt 7: Century from Year



