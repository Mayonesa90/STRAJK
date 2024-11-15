import './App.css'
import Loading from './pages/Loading'
import {Routes, Route, useLocation} from 'react-router-dom'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import { AnimatePresence } from 'framer-motion'


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Loading />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
