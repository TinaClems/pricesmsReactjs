import React from 'react'
import { useAuth } from '../../component/Auth'

export default function StHome() {
  const auth = useAuth()
  const {email, _id, userType, name} = auth?.user;
    return (
    <div>
      <h1>{name || "name"}</h1>
      <p>{email || "name"}</p>
      <p>{_id || "name"}</p>
      <p>{userType || "name"}</p>
    </div>
  )
}
  