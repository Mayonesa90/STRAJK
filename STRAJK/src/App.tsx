import './App.css'
import Loading from './pages/Loading'
import {Routes, Route} from 'react-router-dom'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'


function App() {

  return (
    <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/confirmation' element={<Confirmation />} />
    </Routes>
    
  )
}

export default App
