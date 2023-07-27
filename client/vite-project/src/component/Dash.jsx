import { useState } from 'react'
// import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from '../src/component/Navbar'
import Home from '../src/pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider} from '../context/userContext';
import Dashboard from '/src/pages/Dashboard/index.jsx';
import { BrowserRouter as Router } from "react-router-dom";

axios.defaults.baseURL ='http://localhost:8001'
axios.defaults.withCredentials = true
function Dash() {
  return (
    <UserContextProvider>
    <Navbar />
    
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
     <Routes>
       <Route path='/'element={<Home />} />
       <Route path='/register'element={<Register />} />
       <Route path='/login'element={<Login />} />
       <Route path='/dashboard'element={<Dashboard />} />

     </Routes>
     {/* allows us to use the state we defined in the context  */}
    </UserContextProvider>
  )
}

export default Dash
;