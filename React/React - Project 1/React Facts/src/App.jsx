import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import React, { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <>
    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Main darkMode={darkMode}/>
    </>
  )
}

export default App
