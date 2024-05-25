import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header/>
    <div className='flex h-[80vh]'>
    <Sidebar/>
    <Main/>
    </div>
    <Footer/>
    </>
  )
}

export default App
