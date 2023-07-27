import { React, useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import './Login.css';

export default function Login () {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async(e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('http://localhost:8001/login', {
        email,
        password
    });
      if(data.error){
        toast.error(data.error)
      }else {
        // setData({});
       
        if(data?.user.userType==="student"){
          navigate('/dashboard');
        }else{
          alert("sorry you are not a student")
        }
               
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="login-main">
      <form className="login-form" onSubmit={loginUser}>
        <h1>LOGIN</h1>
        <label className="text-3xl text-blue-800 font-bold underline">Email</label>
        <input
          type="email"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value })}
          className="text-gray-800"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password..."
          value={data.password}
          onChange={(e) => setData({...data, password: e.target.value })}
          className="text-gray-800"
        />
        <button className="" type="submit">Login</button>
      </form>
    </div>
  );
};

