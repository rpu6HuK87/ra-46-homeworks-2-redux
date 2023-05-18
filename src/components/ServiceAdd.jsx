import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeServiceField,
  addService,
  editService
} from '../redux/actions/actions'

export const ServiceAdd = () => {
  const item = useSelector((state) => state.serviceAdd)
  const dispatch = useDispatch()
  const onChange = (evt) => {
    const { name, value } = evt.target
    dispatch(changeServiceField({ [name]: value }))
  }
  const onSubmit = (evt) => {
    evt.preventDefault()
    !item.id
      ? dispatch(addService(item.name, item.price))
      : dispatch(editService(item))
    dispatch(changeServiceField(false))
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <input name="name" type="text" onChange={onChange} value={item.name} />
      <input
        name="price"
        type="number"
        onChange={onChange}
        value={item.price}
      />

      <button type="submit">{item.id ? 'Сохранить' : 'Добавить'}</button>
      {item.id && (
        <button onClick={() => dispatch(changeServiceField(false))}>
          Отменить
        </button>
      )}
    </form>
  )
}
