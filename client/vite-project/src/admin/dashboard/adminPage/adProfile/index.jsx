import React from 'react'
import { Typography } from "antd";
import { useAuth } from '../../../../component/Auth';
import { useNavigate } from 'react-router-dom'

export default function AdProfile(){

  const auth = useAuth()
  const navigate = useNavigate()
  
  const handleLogout =()=>{
    auth.logout()
    navigate('/')
  }

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  return (
    <>
   
    <div>
        <Typography.Title level={4}>Profile</Typography.Title>
       <div> welcome {auth.user}</div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
 
    </div>
    <button onClick={handleLogout}>logout</button>
  
    </>
  )
}


