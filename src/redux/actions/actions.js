import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  CHANGE_SERVICE_FIELD,
  FILTER_SERVICE
} from './types'

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } }
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } }
}

export function editService(service) {
  return { type: EDIT_SERVICE, payload: service }
}

export function changeServiceField(service) {
  return { type: CHANGE_SERVICE_FIELD, payload: service }
}

export function filterService(filter) {
  return { type: FILTER_SERVICE, payload: filter }
}
