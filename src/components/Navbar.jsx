import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline'
import Logo from '../images/Logo.png'

const Navbar = ({userInfo, setterFuncts}) => {
    const token = userInfo.token
    const setToken = setterFuncts.setToken
    const setIsLoggedIn = setterFuncts.setIsLoggedIn

    const logout = () => {
        setToken("")
        setIsLoggedIn(false)
        localStorage.removeItem('token', token)
    }
    // console.log("token iss", token)
    return (
        <div className='navbar'>
            <CssBaseline />
            <div className="links">
                <Link to='/'>
                    <img src={Logo} alt='logo' className="logo"></img>
                </Link>
                <Link className="link" to="/">Home</Link>

                {token && (
                    <Link className="link" onClick={logout} to="/login">Logout</Link>
                )}
                {token && (
                    <Link className="link" to="/create">Create Post</Link>
                )}
                {!token &&(
                    <Link className="link" to="/login">Login</Link>
                )}
                {!token && (
                    <Link className="link" to="/register">Register</Link>
                )} 
                {token && (
                    <Link className="link" to="/me">Inbox</Link>
                )}
            </div>
      </div>
    )
}

export default Navbar