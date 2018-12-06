const allCards = [
  {
    name: 'trade',
    callback: function () {
      return 'Trade'
    }
  }, {
    name: 'rabbit',
    callback: function (player) {
      player.incrementLife(1)
      return 'Rabbit: life + 1'
    }
  }, {
    name: 'bullet',
    callback: function (player) {
      player.incrementBullets(2)
      return 'Bullets found +2'
    }
  }, {
    name: 'wolf',
    callback: function (player) {
      return player.setAction('animals', {
        bullets: -2,
        gold: 1
      }, {
        life: -2
      }) ? 'Wolf, bullet -2, gold +1' : 'Wolf, not enough bullets to kill it life -2'
    }
  }, {
    name: 'sickness',
    callback: function (player) {
      player.decrementLife(2)
      return 'Sickness life -2'
    }
  }, {
    name: 'indian',
    callback: function (player) {
      player.decrementGold(2)
      return 'Indian -2 gold'
    }
  }, {
    name: 'bear',
    callback: function (player) {
      if (player.bullets < 3) {
        player.decrementLife(4)
        return 'Bear, not enough bullets to kill it life -4'
      }
      player.decrementBullets(4)
      player.incrementGold(2)
      return 'Bear, bullet -4, gold +2'
    }
  }
]

const firstLevelCards = [
  {
    name: 'trade',
    frequency: 0.2
  }, {
    name: 'rabbit',
    frequency: 0.3
  }, {
    name: 'bullet',
    frequency: 0.2
  }, {
    name: 'wolf',
    frequency: 0.2
  }, {
    name: 'bear',
    frequency: 0.2
  }, {
    name: 'sickness',
    frequency: 0.1
  }
]

const secondLevelCards = [
  {
    name: 'trade',
    frequency: 0.2
  }, {
    name: 'rabbit',
    frequency: 0.1
  }, {
    name: 'bullet',
    frequency: 0.1
  }, {
    name: 'wolf',
    frequency: 0.3
  }, {
    name: 'sickness',
    frequency: 0.2
  }, {
    name: 'indian',
    frequency: 0.1
  }
]

const thirdLevelCards = [
  {
    name: 'trade',
    frequency: 0.1
  }, {
    name: 'rabbit',
    frequency: 0.1
  }, {
    name: 'bullet',
    frequency: 0.1
  }, {
    name: 'wolf',
    frequency: 0.1
  }, {
    name: 'bear',
    frequency: 0.2
  }, {
    name: 'sickness',
    frequency: 0.2
  }, {
    name: 'indian',
    frequency: 0.2
  }
]

function random (cards) {
  let rand = Math.random()
  const name = cards.find(c => {
    if (c.frequency > rand) {
      return true
    }
    rand = rand - c.frequency
  }).name
  return allCards.find(c => c.name === name)
}

function getFirstLevelCard () {
  return random(firstLevelCards)
}

function getSecondLevelCard () {
  return random(secondLevelCards)
}

function getThirdLevelCard () {
  return random(thirdLevelCards)
}

export default {
  getCard (player) {
    const colPlayer = player.getPos().col
    let card
    if (colPlayer < 3) {
      card = getFirstLevelCard()
    } else if (colPlayer < 6) {
      card = getSecondLevelCard()
    } else {
      card = getThirdLevelCard()
    }
    return card
  }
}
