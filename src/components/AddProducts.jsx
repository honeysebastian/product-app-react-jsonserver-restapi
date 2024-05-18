import React from 'react'

function AddProducts() {
  return (
    <>
      <div className="container m-5 border flex flex-col justify-center items-center w-11/12 py-12">
        <h1 className='text-3xl mb-7'>Add Product</h1>
        <div className="circle border-2 border-dashed border-orange-500 rounded-full flex justify-center items-center">
          <i className="fa-solid fa-plus text-orange-500 text-2xl"></i>
        </div>
      </div>

    </>
  )
}

export default AddProducts