import React from 'react'

function Header() {
  return (
    <div className='bg-black p-5' >
        <div className='flex cursor-pointer gap-3 w-fit' onClick={() => {window.location.reload()}}>
          <p className='text-white text-3xl'>Quizzical</p>
          <img className='h-10' src="https://cdn-icons-png.flaticon.com/512/3406/3406898.png" alt="" />
        </div>
    </div>
  )
}

export default Header