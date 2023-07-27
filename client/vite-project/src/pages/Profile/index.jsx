import React from 'react'
import { Typography } from "antd";
import DashboardLayout from '../../component/Layout';

function Profile() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  return (
    <>
   
    <div>
        <Typography.Title level={4}>Profile</Typography.Title>
       
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
  
    </>
  )
}

export default Profile;
