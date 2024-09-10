import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
