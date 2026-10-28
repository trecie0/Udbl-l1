import { useState } from 'react'
import { Accuei } from './pages/accueil'

import { Route, Routes } from 'react-router-dom'


function App() {

  

  return ( <Routes>

    /// Menu Accueil
    <Route path='/' element={<Accuei/>}  />

  </Routes> )
    
}

export default App
