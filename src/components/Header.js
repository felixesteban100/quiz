import React from 'react'

function Header() {
  return (
    <div className='flex justify-start align-middle gap-3 bg-black p-5'>
        <p className='text-white text-3xl'>Quizzical</p>
        <img className='h-10' src="https://cdn-icons-png.flaticon.com/512/3406/3406898.png" alt="" />
    </div>
  )
}

export default Header