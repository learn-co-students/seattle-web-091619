class Die {
  constructor() {
    console.log('d6 constructor')
    this.faces = 6
  }

  roll() {
    return Math.ceil(Math.random() * this.faces)
  }
}

class D20 extends Die {
  constructor() {
    super()
    console.log('d20 constructor')
    this.faces = 20
  }
}

class FancyDie extends Die {
  roll() {
    let result = super.roll()
    return `~*~*~*${result}~*~*~*`
  }
}

class FancyD20 extends D20 {
  roll() {
    let result = super.roll()
    return `~*~*~*${result}~*~*~*`
  }
}

class Coin extends Die {
  constructor() {
    super()
    this.faces = 2
  }

  flip() {
    let result = super.roll()
    if (result === 1) {
      return 'heads'
    } else {
      return 'tails'
    }
  }
}

class Penny {
  constructor() {
    this.d2 = new Die()
    this.d2.faces = 2
  }

  flip() {
    if (this.d2.roll() === 1) {
      return 'heads'
    } else {
      return 'tails'
    }
  }
}

let d6 = new Die()
let d20 = new D20()
let fancyDie = new FancyDie()
let fancyD20 = new FancyD20()

let coin1 = new Coin()
let coin2 = new Penny()

console.log(`Rolling a D${d6.faces}`)
console.log(d6.roll())

console.log(`Rolling a D${d20.faces}`)
console.log(d20.roll())

console.log(`Rolling a fancy D${fancyDie.faces}`)
console.log(fancyDie.roll())

console.log(`Rolling a fancy D${fancyD20.faces}`)
console.log(fancyD20.roll())
console.log()

console.log('Flipping coin (extends class)')
console.log(coin1.flip())
console.log('coin1.roll:', coin1.roll())
console.log()

console.log('Flipping coin (composed class)')
console.log(coin2.flip())
console.log('has coin2.roll?', coin2.roll)