import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();
  const onLogin = () => {
      navigate('/marvel', {
        replace:true
      })
  }

  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <button
          className='btn btn-outline-primary'
          onClick={onLogin}
        >
          Login
        </button>
    </>
  )
}
