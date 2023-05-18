import { useSelector, useDispatch } from 'react-redux'
import { changeServiceField, removeService } from '../redux/actions/actions'

export const ServiceList = () => {
  const items = useSelector((state) => state.serviceList)
  const form = useSelector((state) => state.serviceAdd)

  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeService(id))
  }
  const handleEdit = (service) => {
    dispatch(changeServiceField(service))
  }

  return (
    <table>
      <tbody>
        {items.length
          ? items.map((item) => (
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
          : 'Список пуст..'}
      </tbody>
    </table>
  )
}
