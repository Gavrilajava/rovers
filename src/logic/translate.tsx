import Grid from './Grid'
import Rover from './Rover'


const digits: RegExp =  new RegExp(/^\d+$/)
const directions: RegExp =  new RegExp(/^[NESW]$/)
const orders: RegExp =  new RegExp(/^[LRM]+$/)


const translate = (command: string) => {
  let result:string = ''
  let commands = command.split(' ')
  if (command.match(orders)){
    let rover = Rover.getLast()
    command.split('').forEach(c => {
      if (c === 'M' && result === '') {
         if (!rover.move()){
           result =  `Incorrect move at ${rover.stringify()}`
         }
      }
      else{
        rover.turn(c)
      }
    })
    result === '' ? result = rover.stringify() : result = result
  }
  else if (commands.length === 2 && commands.join('').match(digits)){
    if (parseInt(commands[0]) >0 && parseInt(commands[1])>0){
      new Grid(parseInt(commands[0]), parseInt(commands[1]))
      result = "Grid created"
    }
    else{
      result = "Grids dimentions should be positive"
    }
  }
  else if (commands.length === 3 && commands.slice(0,2).join('').match(digits) && commands[2].match(directions)){
    if (Grid.getLast().validate([parseInt(commands[0]), parseInt(commands[1])])){
      new Rover (parseInt(commands[0]), parseInt(commands[1]), commands[2], Grid.getLast())
      result = "Rover created"
    }
    else{
      result = "Coordinates are out of the grid"
    }
  }
  else {
    result = "Command not recognized"
  }

  return result
}

export default translate