import { FILTER_SERVICE } from '../actions/types'

export default function serviceFilterReducer(state = '', action) {
  switch (action.type) {
    case FILTER_SERVICE:
      return action.payload
    default:
      return state
  }
}
