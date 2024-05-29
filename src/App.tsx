import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import styles from './App.module.css'


import Home from './pages/Home'
import Case from './pages/Case'
import Peliculas from './pages/Pelicula'
import Acessorios from './pages/Acessorios'
import Navbar from './components/Navbar'

function App() {
  

  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='capas' element={<Case></Case>}/>
      <Route path='Peliculas' element={<Peliculas></Peliculas>}/>
      <Route path='acessorios' element={<Acessorios></Acessorios>}/>
    </Routes>
   </Router>
  )
}

export default App
