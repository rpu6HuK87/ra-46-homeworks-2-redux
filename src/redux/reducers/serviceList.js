import { nanoid } from 'nanoid'
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from '../actions/types'

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 }
]

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload
      return [...state, { id: nanoid(), name, price: Number(price) }]
    case EDIT_SERVICE:
      return state.map((service) => {
        return service.id === action.payload.id
          ? { ...service, ...action.payload }
          : service
      })
    case REMOVE_SERVICE:
      const { id } = action.payload
      return state.filter((service) => service.id !== id)
    default:
      return state
  }
}
