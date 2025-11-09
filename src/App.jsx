
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Learing from './pages/learing/Learing'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/learing' element={<Learing/>} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
