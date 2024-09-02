import React,{ useState } from 'react'
import './Css/Cursor.css'
import Cursor from './assets/cursor.png'
import Pointer from './assets/pointer.png'
import './App.css'

function App() {
  return (
    <>
      <h1>Custom cursor</h1>
      <div className="cursor">
        <div className="cursor-img"><img id='img' src={Cursor} /></div>
        <div classNa me="pointer-img pointer"><img id='img' src={Pointer} /></div>
      </div>
    </>
  )
}

export default App
