
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => { 
  const navigate = useNavigate()
  const[logininfo,setlogininfo] = useState({
   
    email:'',
    password:''
  })

  
  const handleChange = (e)=>{
     const{name,value}=e.target;
     console.log(name,value);
     const copylogininfo = {...logininfo}
     copylogininfo[name] = value;
     setlogininfo(copylogininfo)
      }

   const handlelogin = async(e)=>{
    e.preventDefault();
   
    try{
     const url = "http://localhost:1000/auth/login";
     const response = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(logininfo)

     })
     const result = await response.json();
     console.log(result);
     const {sucess , message, jwtToken, name, error }= result;
     if(sucess){
        localStorage.setItem('token',jwtToken)
        localStorage.setItem('loggedInuser',name);
        
        setTimeout(()=>{
            navigate('/home')
        },1000)
     }
    }catch(err){
      console.log(err)
    }
 
   }

 return (
    <div className='container'>
    <h1>Login</h1>
    <form onSubmit={handlelogin} >
        <div>
            <label htmlFor='email'>Email</label>
            <input
                onChange={handleChange}
                type='email'
                name='email'
                placeholder='Enter your email...'
                value={logininfo.email}

            />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input
                 onChange={handleChange}
                type='password'
                name='password'
                placeholder='Enter your password...'
                value={logininfo.password}
            />
        </div>
        <button type='submit'>Login</button>
        <span>Does't have an account ?
        <Link to="/signup">Signup</Link>
        </span>
    </form>
    
</div>
  )
}

export default Login
