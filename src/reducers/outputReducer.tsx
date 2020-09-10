
import {Action} from '../types'


const OutputReducer = (state = [], action: Action): Array<string> => {
  switch (action.type) {
    case 'addOutput':
      return [...state, action.output ]
    case 'clear':
      return []
    default:
      return state
  }
}

export default OutputReducer