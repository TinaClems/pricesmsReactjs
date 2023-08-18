import React from 'react'
import { Typography } from 'antd';
import { useAuth } from '../Auth';

function AppFooter () {
  const auth = useAuth()

  const user = auth?.user.userType;
  return (
    <div className='AppFooter'>
      <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>Terms of use</Typography.Link>




    </div>
    
  )
}

export default AppFooter;