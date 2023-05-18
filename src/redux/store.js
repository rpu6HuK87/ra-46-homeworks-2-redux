import {combineReducers, compose, legacy_createStore} from 'redux'
import serviceListReducer from './reducers/serviceList'
import serviceAddReducer from './reducers/serviceAdd'

const ReduxDevTools =
  window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()

export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      serviceList: serviceListReducer,
      serviceAdd: serviceAddReducer
    }),
    undefined,
    compose(ReduxDevTools)
  )
}
