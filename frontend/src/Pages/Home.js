import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  
  const [loggedInuser, setLoggedInUser] = useState('');
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInuser'))
}, [])
const handleLogout = (e) => {
  localStorage.removeItem('token');
  localStorage.removeItem('loggedInuser');
  
  setTimeout(() => {
      navigate('/login');
  }, 1000)
}
  
  return (
    <div>Home
      <h1>{loggedInuser}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home