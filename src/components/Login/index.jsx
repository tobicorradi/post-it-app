import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/table")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input type="text" placeholder="Type your username"/>
            <Button type="submit" text="login" />
        </form>
    )
}

export default Login
