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
  bonus = {}
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
    this.bullets = this.bullets + nb
  }
  decrementBullets (nb) {
    this.bullets = this.bullets - nb
  }
  incrementGold (nb) {
    this.gold = this.gold + nb
  }
  decrementGold (nb) {
    this.gold = this.gold - nb
  }
  addBonus (card) {
    this.bonus[card.type] = this.bonus[card.type] || {}
    this.bonus[card.type] = Object.assign(this.bonus[card.type], card.bonus)
  }
  getBonus (type) {
    return this.bonus[type] || {}
  }
  setAction (type, enough, notEnough = {}) {
    let that = this
    function checkObj (obj, bonus) {
      let newObj = {
        bullets: 0,
        life: 0,
        gold: 0
      }
      if (obj.bullets) {
        newObj.bullets = obj.bullets + (bonus.bullets || 0)
        if ((newObj.bullets + that.bullets) < 0 ) {
          return false
        }
      }
      if (obj.life) {
        newObj.life = obj.life + (bonus.life || 0)
        if ((newObj.life + that.life) < 1) {
          return false
        }
      }
      if (obj.gold) {
        newObj.gold = obj.gold + (bonus.gold || 0)
        if ((newObj.gold + that.gold) < 0) {
          return false
        }
      }
      that.bullets = that.bullets + newObj.bullets
      that.life = that.life + newObj.life
      that.gold = that.gold + newObj.gold
      console.log(newObj)
      return newObj

    }
    let bonus = this.getBonus(type)
    return checkObj(enough, bonus) || checkObj(notEnough, bonus) || this.setDeath()
  }
  setDeath () {
    this.bullets = -1
    this.life = -1
    this.gold = -1
  }
}
