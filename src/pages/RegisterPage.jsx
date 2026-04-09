import React, { useState } from 'react'

const RegisterPage = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [error , setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setError('Passwords do not match')
            return
        }
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                />
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Register</button>
        </form>
    </div>
    </div>
  )
}

export default RegisterPage