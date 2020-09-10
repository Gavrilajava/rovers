import Grid from './Grid'

export default class Rover {

  static all: Array<Rover> = []
  static readonly directions: string = "NESW"

  x: number
  y: number
  direction: string
  grid: Grid

  constructor(x: number, y: number, direction: string, grid: Grid){
    this.x = x
    this.y = y
    this.direction = direction
    this.grid = grid
    Rover.all.push(this)
  }

  public static getLast(): Rover {
    return Rover.all[Rover.all.length -1]
  }

  public stringify(): string {
    return `${this.x} ${this.y} ${this.direction}`
  }

  public move(): boolean {
    let newCoords: Array<number> = []
    switch(this.direction){
      case "N":
        newCoords = [this.x, this.y+1]
        break;
      case "S":
        newCoords = [this.x, this.y-1]
        break;
      case "W":
        newCoords = [this.x-1, this.y]
        break;
      case "E":
        newCoords = [this.x+1, this.y]
        break;
      default:
        console.error("Houston, we have a problem.")
    }
    if (this.grid.validate(newCoords)){
      this.x = newCoords[0]
      this.y = newCoords[1]
      return true
    }
    else {
      return false
    }
  }

  public turn(side: string): boolean{
    let x = Rover.directions.indexOf(this.direction)
    if (side === 'R'){
      x === 3 ? x = 0 : x++
    }
    else if (side === 'L'){
      x === 0 ? x = 3 : x--
    }
    else {
      return false
    }
    this.direction = Rover.directions.charAt(x)
    return true
  }
  

}