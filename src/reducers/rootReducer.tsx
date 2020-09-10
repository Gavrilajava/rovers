import { combineReducers } from 'redux'
import OutputReducer from './outputReducer'

export interface RootState {
  OutputReducer: Array<string>
}


const rootReducer = combineReducers({ OutputReducer})


export default rootReducer
