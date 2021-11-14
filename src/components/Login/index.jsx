import React, {useState} from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/table")
        dispatch(logIn(username))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input required onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Type your username"/>
            <Button type="submit" text="login" />
        </form>
    )
}

export default Login
