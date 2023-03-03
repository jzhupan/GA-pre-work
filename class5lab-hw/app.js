//Class5 Lab and HomeWork - Objects

//Warm up lab
const myMovie = {
    title: 'Jurassic Park',
    director: 'Stephen Spielberg',
    actors: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum', 'Samuel L. Jackson'],
    releaseYear: 1993,
    duration: 128
  }
  
  //console.log(`My favorite movie is ${myMovie.title} directed by ${myMovie.director}, the one released in ${myMovie.releaseYear}, ${myMovie.actors[1]} is one of the starring actors, the cinema version included ${myMovie.director}'s extended cut, so the movie was a total of ${myMovie.duration + 25} minutes!`)
  
  //Part 1
  
  const montana = {
    scientist: 'Dr. Alan Grant',
    depth: '10 meters',
    dino: 'Velociraptor'
  }
  
  const guestOfHonor=  montana.scientist
  const cleverGirl = montana.dino
  //console.log(cleverGirl)
  
  
  //Part 2
  const costaRica = {
    programmer: 'Dennis Nedry',
    contact: 'Lewis Dodgson',
    payment: 750000,
    specimens: [
      'Tyrannosaurus Rex',
      'Triceratops',
      'Brachiosaurus',
      'Velociraptor',
      'Dilophasaurus',
      'Gallimimus'
    ],
    menthol: false
  }
  
  const barbasol = costaRica.specimens
  const favoriteDino = costaRica.specimens[3]
  
  //console.log('Nedry is supposed to steal the following specimens:', barbasol)
  //console.log(`My favorite dino is ${favoriteDino}.`)
  
  
  //Part 3
  const jurassicPark = {
    expenseSpared: 0,
    staff: {
      founder: 'John Hammod',
      programmer: 'Dennis Nedry',
      engineer: 'Jhon Arnold',
      security: 'Robert Muldoon',
      scientist: 'Dr. Henry Wu'
    },
    guest: ['Dr. Alan Grant', 'Dr. Ellie Sattler', 'Dr. Ian Malcolm', 'Donald Gennaro'],
  }
  
  const parkFounder = jurassicPark.staff.founder
  //console.log(parkFounder)
  jurassicPark.guest.push('Tim','Lex')
  //console.log(jurassicPark)
  delete jurassicPark.staff.engineer
  //console.log(jurassicPark)
  
  
  //Part 4 - Gene Splicing
  
  class dinosaur {
    constructor(name, height, weight, isCarnivore) {
      this.name= name
      this.height= height
      this.weight= weight
      this.isCarnivore= isCarnivore
    }
    dinoData(){
      return `This new dinosaur's name is ${this.name}. It is ${this.height}ft tall, weights ${this.weight} lbs, and it's ${this.isCarnivore}.`
    }
  }
  
  const stegosaurus = new dinosaur('Stegosaurus', 13, 6800, 'herbivore')
  const triceratops = new dinosaur('Triceratops', 27, 18000, 'herbivore')
  const spinosaurus = new dinosaur('Spinosaurus', 18, 44000, 'carnivore')
  
  //console.log(stegosaurus.dinoData())
  //console.log(triceratops.dinoData())
  //console.log(spinosaurus.dinoData())
  
  