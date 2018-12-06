const allCards = [
  {
    name: 'horse',
    price: 2,
    text: '+1 motion',
    frequency: 1
  },
  {
    name: 'builder',
    price: 1,
    text: '-1 building cost',
    frequency: 1
  },
  {
    name: 'digger',
    price: 2,
    text: '+1 gold per dig',
    frequency: 1
  },
  {
    name: 'hunter',
    price: 2,
    text: '-1 bullit for animals',
    type: 'animals',
    bonus: {
      bullits: -1
    },
    frequency: 1
  },
  {
    name: 'as',
    price: 2,
    text: '-1 bullit for men',
    type: 'men',
    bonus: {
      bullits: -1
    },
    frequency: 1
  },
  {
    name: 'negociator',
    price: 2,
    text: '-1 cost per trade card',
    frequency: 1
  }
]

function random () {
  let rand = Math.round(Math.random() * allCards.length)
  let curIndex = 0
  return allCards.find(c => {
    if ((c.frequency + curIndex) >= rand) {
      return true
    }
    curIndex = curIndex + c.frequency
  })
}

export default {
  getCards (nb) {
    return Array.from({length: nb}, random)
  }
}
