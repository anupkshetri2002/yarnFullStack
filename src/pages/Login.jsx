import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const LogIn = () => {
  const navigate=useNavigate();

  const [id,idchange] = useState('');
  const [password,passwordchange] = useState('');
   
  const IsValidate=() =>{
    let isproceed=true;
    let errormessage="Please enter the value in "
    if (id === null || id ===''){
      isproceed=false;
      errormessage += 'Username'
    }
  
    if (password === null || password ===''){
      isproceed=false;
      errormessage += ' Password'
    }
    
    if (!isproceed)
    {
      toast.warning(errormessage)
    }

    return isproceed;
  }
  const handlesubmit  = async (e) => {
    e.preventDefault();
    if(IsValidate()){
     console.log("hi")
     fetch("http://localhost:8000/users/"+id).then((res)=>{
      return res.json();
     }).then((resp)=>{
      console.log(resp)
      if(Object.keys(resp).length===0){
        toast.error('Please enter valid username')
      }
      else{
        if (resp.password===password){
toast.success('Sucessfully signed In')
navigate('/Profile');
        }else{
          toast.error('Please enter valid Credentials')

        }
      }
     }).catch((err)=>{
      toast.error('Login Failed due to '+err)
     })
    
    }
  }

  return (
    <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none bg-white items-center justify-center  w-[500px] m-auto mt-20">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Sign In
    </h4>
    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Enter your details to Login.
    </p>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6">
        <div className="relative h-11 w-full min-w-[200px]">
          <input value={id} onChange={(e)=>idchange(e.target.value)}
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Username
          </label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input value={password} onChange={(e)=>passwordchange(e.target.value)}
            type="text"
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Password
          </label>
        </div>
      </div>
      <button onClick={ (e)=>handlesubmit(e)}
        className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        LOG IN
      </button>
      <button className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Don't have an account?
        <NavLink to ='/Register'><div
          className="font-medium text-pink-500 transition-colors hover:text-blue-700"
        >
          Sign Up
        </div></NavLink>
      </button>
    </form>
  </div>
  )
}


export default LogIn
