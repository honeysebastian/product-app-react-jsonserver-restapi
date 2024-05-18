import React from 'react'

function SideBar() {
  return (
    <div className='bg-slate-900 h-full text-white'>
      <div className="logo text-5xl font-bold pt-7 text-center text-lime-500">
        <i className="fa-solid fa-layer-group me-5"></i>
      </div>
      <div className='pt-16 side-menu'>
        <div className='menu-item pb-8 flex flex-col justify-center items-center mb-4 hover:text-orange-400'><i className="fa-solid fa-gauge mb-3"></i><p>Dashboard</p></div>
        {/* <div className='pb-8 flex flex-col justify-center items-center mb-4'><i className="fa-solid fa-square-plus mb-3"></i><p>Add Products</p></div> */}
        <div className='menu-item pb-8 flex flex-col justify-center items-center mb-4 hover:text-orange-400'><i className="fa-brands fa-product-hunt mb-3"></i><p>View Products</p></div>
        {/* <div className='pb-8 flex flex-col justify-center items-center mb-4'><i className="fa-solid fa-square-plus mb-3"></i><p>Add Category</p></div> */}
        <div className='menu-item pb-8 flex flex-col justify-center items-center mb-4 hover:text-orange-400'><i className="fa-solid fa-list mb-3"></i><p>View Category</p></div>
      </div>
    </div>
  )
}

export default SideBar