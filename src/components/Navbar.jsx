import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLink, Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const navLinkStyles =({ isActive }) => {
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
      
    }
  }
  const location = useLocation().pathname
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <div className=' flex text-orange-700 justify-between items-center h-24 max-w-[1240px] mx-auto px-4  '>
      <h1 className='w-full text-3xl font-bold text-[#5900df]'>React</h1>
      <ul className='flex '> 
       <NavLink style={navLinkStyles}to="/"> <li className='p-4'>HOME</li></NavLink>
       <NavLink style={navLinkStyles}to="/Product"><li className='p-4'>PRODUCT</li></NavLink>
       <NavLink style={navLinkStyles}to="/Research"><li className='p-4'>RESEARCH</li></NavLink>
       <NavLink style={navLinkStyles}to="/About"><li className='p-4'>ABOUT</li></NavLink>
       <NavLink style={navLinkStyles}to="/Contact"><li className='p-4'>CONTACT</li></NavLink>
      </ul>
      { location==="/Profile"?
        <Link to='/Profile' ><FormControl>
      <Select
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select' }}
      >
        <MenuItem value="" disabled className='bg-orange-200 text-amber-400'>
        PROFILE
        </MenuItem>
        <MenuItem value="option1">Account</MenuItem>
        <MenuItem value="option2">Setting</MenuItem>
        <MenuItem value="option3">Log-Out</MenuItem>
      </Select>
    </FormControl> </Link>
      :
      <Link to='/Register' > <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-9'>LogIn/SignUp</button></Link>}
    </div>
    

  )
}

export default Navbar
