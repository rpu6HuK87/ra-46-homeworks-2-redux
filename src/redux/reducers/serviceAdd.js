import { CHANGE_SERVICE_FIELD } from '../actions/types'

const initialState = { name: '', price: '', id: false }

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      return action.payload ? { ...state, ...action.payload } : initialState
    default:
      return state
  }
}
