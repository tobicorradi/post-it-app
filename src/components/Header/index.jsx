import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { logOut } from '../../actions'
import { useNavigate } from 'react-router'
import './Header.css'
const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state.user)
    const { username } = state.user
    const handleLogOut = () => {
        dispatch(logOut())
        navigate("/")
    } 
    return (
        <header>
            <h1>Post It App</h1>
            {username !== '' ? <Button style={{marginBottom: 0}} onClick={handleLogOut} text={"LogOut"}/> : null}
        </header>
    )
}

export default Header
