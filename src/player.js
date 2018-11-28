export default class Player {
  pos = {}
  name = false
  color = false
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
  getTilesMove () {
    const curLine = this.pos.line
    const curCol = this.pos.col
    let allTiles = [
      {line: curLine - 1, col: curCol},
      {line: curLine + 1, col: curCol},
      {line: curLine, col: curCol - 1},
      {line: curLine, col: curCol + 1}
    ]
    return allTiles
  }
}
