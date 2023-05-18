import { useSelector, useDispatch } from 'react-redux'
import { changeServiceField, removeService } from '../redux/actions/actions'

export const ServiceList = () => {
  const items = useSelector((state) => state.serviceList)
  const filter = useSelector((state) => state.serviceFilter)
  const form = useSelector((state) => state.serviceAdd)

  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeService(id))
  }
  const handleEdit = (service) => {
    dispatch(changeServiceField(service))
  }

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <table>
      <tbody>
        {filtered.length
          ? filtered.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  {form.id !== item.id ? (
                    <>
                      <button onClick={() => handleEdit(item)}>
                        Редактировать
                      </button>
                      <button onClick={() => handleRemove(item.id)}>
                        Удалить
                      </button>
                    </>
                  ) : (
                    'редактируется...'
                  )}
                </td>
              </tr>
            ))
          : items.length
          ? 'Результат отфильтрован'
          : 'Список пуст..'}
      </tbody>
    </table>
  )
}
