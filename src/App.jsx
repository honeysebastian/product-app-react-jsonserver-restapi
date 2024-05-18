import { useState } from 'react'
import './App.css'
import Dashboard from "./pages/Dashboard"
import SideBar from './components/SideBar'
import Products from './pages/Products'
import { Route, Router, Routes } from 'react-router-dom'
function App() {


  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/6 ">
          <SideBar />
        </div>
        <div className="basis-5/6">
          <Routes>
            <Route element={<Dashboard />} path='/'></Route>
            <Route element={<Products />} path='/products'></Route>
          </Routes>
        </div>
      </div>




    </>
  )
}

export default App
