const allTilesType = [
  {
    name: 'grass',
    color: 'rgba(0, 255, 0, 0.6)'
  }, {
    name: 'forest',
    color: 'rgba(0, 100, 0, 0.6)'
  }, {
    name: 'water',
    color: 'rgba(0, 255, 255, 0.6)'
  }, {
    name: 'gold',
    color: 'rgba(255, 255, 100, 0.6)'
  }, {
    name: 'mountain',
    color: 'rgba(150, 75, 0, 0.6)'
  }
]

const firstLevelType = [
  {
    name: 'grass',
    frequency: 0.4
  }, {
    name: 'forest',
    frequency: 0.3
  }, {
    name: 'water',
    frequency: 0.3
  }
]

const secondLevelType = [
  {
    name: 'grass',
    frequency: 0.3
  }, {
    name: 'forest',
    frequency: 0.2
  }, {
    name: 'water',
    frequency: 0.2
  }, {
    name: 'mountain',
    frequency: 0.3
  }
]

const thirdLevelType = [
  {
    name: 'grass',
    frequency: 0.2
  }, {
    name: 'forest',
    frequency: 0.2
  }, {
    name: 'water',
    frequency: 0.2
  }, {
    name: 'mountain',
    frequency: 0.2
  }, {
    name: 'gold',
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
  return allTilesType.find(c => c.name === name)
}

function getFirstLevelTile () {
  return random(firstLevelType)
}

function getSecondLevelTile () {
  return random(secondLevelType)
}

function getThirdLevelTile () {
  return random(thirdLevelType)
}

export default {
  getTileType (col) {
    let type
    if (col < 3) {
      type = getFirstLevelTile()
    } else if (col < 6) {
      type = getSecondLevelTile()
    } else {
      type = getThirdLevelTile()
    }
    return type
  }
}
