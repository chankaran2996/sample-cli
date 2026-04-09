import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')

    // const navigate = useNavigate()

    // const handileClick = () => {
    //     navigate('/register')
    // }

    const handleLogin = async (e) => {
        e.preventDefault()
        // const responce = await fetch('http://localhost:5000/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(loginData)
        // })


        if (responce.status === 200) {
            alert('Login successful!')
            setError('')
            setLoginData({
                username: '',
                password: ''
            })
        } else {
            setError('Invalid username or password')
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </div>
          <div>
            {/* <p className="text-blue-500 hover:underline" onClick={handileClick}>Don't have an account? Register</p> */}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>

  )
}

export default LoginPage