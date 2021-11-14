import React from 'react'
import Button from '../Button'
const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
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
