import React from 'react'

function AddCategory() {
  return (
    <>
      <div className="container border m-5 flex flex-col justify-center items-center w-11/12 py-12">
        <h1 className='text-3xl mb-7'>Add Category</h1>
        <div className="circle border-2 border-dashed border-orange-500 rounded-full flex justify-center items-center">
          <i className="fa-solid fa-plus text-orange-500 text-2xl"></i>
        </div>
      </div>
    </>
  )
}

export default AddCategory