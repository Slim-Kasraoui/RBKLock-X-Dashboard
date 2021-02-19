import { combineReducers } from 'redux'
import staffReducer from './staffReducer'

const initialState = {
  sidebarShow: 'responsive'
}
const changeState = (state = initialState, { type, ...rest }) => {
  console.log('in the changestate ====>', { type, ...rest });
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}
const rootReducer = combineReducers({
  changeState,
  staffReducer
})

export default rootReducer;
