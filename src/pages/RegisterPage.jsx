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
    <div className="register-page">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegisterPage