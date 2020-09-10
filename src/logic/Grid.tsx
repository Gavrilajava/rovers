export default class Grid {

  static last: Grid

  x: number
  y: number

  constructor(x: number, y: number){
    this.x = x
    this.y = y
    Grid.last = this
  
  }

  public static getLast(): Grid {
    return Grid.last
  }

  public validate(coords: Array<number>): boolean {
    if (coords[0] <= this.x && 
        coords[1] <= this.y &&
        coords[0] >= 0 && 
        coords[1] >= 0
        ){
      return true
    }
    else{
      return false
    }
  }

}

