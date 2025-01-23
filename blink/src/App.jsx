import React from 'react'
import './App.css'
import Navbar from"./assets/Navbar/Navbar"
import Cards from "./assets/Transition cards/Cards"
import Home from './assets/Home/Home'
import About from './assets/About/About'
import Founder from './assets/Founder/Founder'
import Save from './assets/Savel/Save'
import Causes from './assets/Causes/Causes'
import News from './assets/News/News'
function App() {
 

  return (
    <>
    <Navbar/>
    <Home/>
    <Cards/>
    <About/>
    <Founder/>
    <Save/>
    <Causes/>
    <News/>
    </>
  )
}

export default App
