const initialLife = 6
const initialBullets = 3
const initialGold = 3

const maxLife = 6
const maxBullets = 6

export default class Player {
  pos = {}
  name = false
  color = false
  life = initialLife
  bullets = initialBullets
  gold = initialGold
  maxLife = maxLife
  maxBullets = maxBullets
  constructor (name, pos, color) {
    this.name = name
    this.pos = pos
    this.color = color
  }
  setPos (lineId, colId) {
    this.pos.line = lineId
    this.pos.col = colId
  }
  getPos () {
    return this.pos
  }
  up () {
    this.pos.line--
  }
  down () {
    this.pos.line++
  }
  left () {
    this.pos.col--
  }
  right () {
    this.pos.col++
  }
  incrementLife (nb) {
    this.life = this.life + nb
  }
  decrementLife (nb) {
    this.life = this.life - nb
  }
  incrementBullets (nb) {
    this.bullets = this.life + nb
  }
  decrementBullets (nb) {
    this.bullets = this.life - nb
  }
  incrementGold (nb) {
    this.gold = this.life + nb
  }
  decrementGold (nb) {
    this.gold = this.life - nb
  }
}
