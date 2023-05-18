import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterService } from '../redux/actions/actions'

export const ServiceFilter = () => {
  const filter = useSelector((state) => state.serviceFilter)
  const dispatch = useDispatch()

  return (
    <>
      <input
        name="filter"
        type="text"
        placeholder="Фильтр"
        onChange={(evt) => dispatch(filterService(evt.target.value))}
        value={filter}
      />
      {filter && (
        <button onClick={() => dispatch(filterService(''))}>
          Очистить фильтр
        </button>
      )}
    </>
  )
}
