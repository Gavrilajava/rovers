import Grid from './Grid'
import Rover from './Rover'


const digits =  new RegExp(/^\d+$/)
const directions =  new RegExp(/^[NESW]$/)
const orders =  new RegExp(/^[LRM]+$/)


const translate  = (command:string):string => {
  let result = ''
  let error = ''
  const commands = command.split(' ')
  if (command.match(orders)){
    const rover = Rover.getLast()
    command.split('').forEach(c => {
      if (c === 'M' && result === '') {
         if (!rover.move()){
          error =  `Incorrect move at ${rover.stringify()}`
         }
      }
      else{
        rover.turn(c)
      }
    })
    error === '' ? result = rover.stringify() : result = error
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