import React from 'react'
import './App.css'

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import Home from './Home'

function App() {

  return (
    <>
      <h1>Exercícios React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li> <Link to="/">Página inicial</Link> </li>
        </ul>
        
        <hr />

        <Routes>
          {/* path="/" significa a raiz do website */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default Exercicio01