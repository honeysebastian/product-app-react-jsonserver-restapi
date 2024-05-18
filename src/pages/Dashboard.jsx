import React from 'react'
import AddCategory from '../components/AddCategory'
import AddProducts from '../components/AddProducts'

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="nav w-full h-20 text-white flex justify-between items-center shadow-lg">
          <p className='text-5xl font-bold text-orange-500 ms-5'>Purple</p>
          <div className='text-2xl flex pr-12'>
            <div className="icons">
              <i className="fa-solid fa-bell me-5 text-blue-800"></i>
              <i className="fa-solid fa-envelope me-5 text-lime-500"></i>
            </div>
            <p className='text-orange-500 menu-item hover:text-slate-500 '>Admin</p>
          </div>

        </div>
        <div className="flex text-white text-5xl font-bold mt-10">
          <div className="menu-item basis-1/2 p-14 bg-lime-500 hover:bg-slate-500 text-center m-5 shadow-lg">Total Products</div>
          <div className="menu-item basis-1/2 p-14 bg-orange-500 hover:bg-slate-500 text-center m-5 shadow-lg">Total Category</div>
        </div>
        <div className="flex sm:flex-col lg:flex-row">
          <div className="basis-1/2">
            <AddProducts />
          </div>
          <div className="basis-1/2">
            <AddCategory />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard