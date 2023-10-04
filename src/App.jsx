import { useState } from 'react'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import {Link, Routes, Route} from 'react-router-dom'

import './App.css'

function App() {
 
  return (
    <>
    <div className="navbar">
      <Link to={"/players"}>List of Players</Link>
    </div> 

    <div className="playerForm">
    <NewPlayerForm />
    </div>

    <div className="mainSection">
      <Routes>
        <Route path='/players' element={<AllPlayers />}/>
        <Route path='/players/:id' element={<SinglePlayer/>} />
    </Routes>
    </div>
    </>
    
  )
}

export default App