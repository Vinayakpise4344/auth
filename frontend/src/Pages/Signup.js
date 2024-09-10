import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { handleError } from '../util'
const Signup = () => {
  const navigate = useNavigate()
  const[signinfo,setsigninfo] = useState({
    name: '',
    email:'',
    password:''
  })

  
  const handleChange = (e)=>{
     const{name,value}=e.target;
     console.log(name,value);
     const copysigninfo = {...signinfo}
     copysigninfo[name] = value;
     setsigninfo(copysigninfo)
      }

   const handleSignup = async(e)=>{
    e.preventDefault();
   
    try{
     const url = "http://localhost:1000/auth/signup";
     const response = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(signinfo)

     })
     const result = await response.json();
     console.log(result);
     const {sucess , message }= result;
     if(sucess){
        alert("hello");
        setTimeout(()=>{
            navigate('/login')
        },1000)
     }
    }catch(err){
      console.log(err)
    }
 
   }


  return (
    <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        required
                        autoFocus
                        placeholder='Enter your name...'
                        value={signinfo.name}
                    />
                   
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signinfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signinfo.password}
                    />
                </div>
                <button type='submit'>Signup</button>
                <span>Already have an account ?
                    <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
        
  )
}

export default Signup