import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext';

const RegisterPage = () => {
    // const [name , setName] = useState('')
    // const [email , setEmail] = useState('')
    // const [password , setPassword] = useState('')
    // const [confirmPassword , setConfirmPassword] = useState('')
    const [error , setError] = useState('')

    const { registerUser , user , setUser } = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!user.userName || !user.email || !user.password || !user.confirmPassword){
            setError('All fields are required')
            return
        }
        if(user.password !== user.confirmPassword){
            setError('Passwords do not match')
            return
        }
        registerUser()
        // Here you would typically send the registration data to your backend API
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold text-center">Register</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                    type="text" 
                    value={user.userName}
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    type="password" 
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input 
                    type="password" 
                    value={user.confirmPassword}
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} 
                />
            </div>
            <div>
                <p><Link to="/login" className="text-blue-500 hover:underline">Already have an account? Login</Link></p>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Register</button>
        </form>
    </div>
    </div>
  )
}

export default RegisterPage