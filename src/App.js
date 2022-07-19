import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/mole/Mole.js'

function App() {
  // states
  const [dens, setDens] = useState(getDensState())
  const [points, setPoints] = useState(0)

  // effects
  useEffect(() => {
    startGame()
  }, [])

  // sets timer for populating moles
  // helpers
  function startGame() {
    setInterval(() => {
      setDens(getDensState())
    }, 1500)
  }

  //randomize visibility of moles
  function getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }

  // when mole is clicked, points += 1
  const onMoleWhacked = () => {
    setPoints(points + 1)
  }

  // returns nine moles, defined by visibility based on Mole.js
  // renders
  const denElements = dens.map((den, index) => {
    // console.log(den)
    return (
      <Mole key={`mole-${index}`} visibility={den.isMoleVisible} function={onMoleWhacked} />
    )
  })

  // returns full game
  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <h2>Points: { points }</h2>
      <div className="dens">
        { denElements }
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  )
}

export default App
