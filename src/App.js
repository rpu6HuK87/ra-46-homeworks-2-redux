import { ServiceAdd } from './components/ServiceAdd'
import { ServiceList } from './components/ServiceList'
import { ServiceFilter } from './components/ServiceFilter'

function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </div>
  )
}

export default App
