import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {toast } from 'react-toastify'

const Profile = () => {
  return (
    <div>
      <div className='h-[100px] w-[1400px] bg-violet-950 flex justify-center items-center '>
        <h1 className='text-20xl font-bold' > THIS IS  A Profile PAGE</h1>
      </div>
      <NavLink to='/'> <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-9'>LogOut</button></NavLink>
    </div>
  )
}

export default Profile
