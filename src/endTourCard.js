const firstLevelCards = [
  {
    name: 'trade',
    frequency: 0.2,
    callback: function () {
      return 'Trade'
    }
  }, {
    name: 'rabbit',
    frequency: 0.3,
    callback: function (player) {
      player.incrementLife(1)
      return 'Rabbit: life + 1'
    }
  }, {
    name: 'bullet',
    frequency: 0.2,
    callback: function (player) {
      player.incrementBullets(2)
      return 'Bullets found +2'
    }
  }, {
    name: 'wolf',
    frequency: 0.2,
    callback: function (player) {
      if (player.bullets < 1) {
        player.decrementLife(2)
        return 'Wolf, not enough bullets to kill it life -2'
      }
      player.decrementBullets(1)
      player.incrementGold(1)
      return 'Wolf, bullet -1, gold +1'
    }
  }, {
    name: 'sickness',
    frequency: 0.1,
    callback: function (player) {
      player.decrementLife(2)
      return 'Sickness life -2'
    }
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
  return cards.find(c => {
      if (c.frequency > rand) {
        return true
      }
      rand = rand - c.frequency
  })
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
