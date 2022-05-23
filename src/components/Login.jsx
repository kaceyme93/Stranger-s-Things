import React from "react";
import ReactDOM from 'react-dom'
import { useState } from "react"
import login from "../api/apilogin";
import { useHistory } from "react-router-dom";

const Login = ({userInfo, setterFuncts}) => {
    const {token, userName, isLoggedIn} = userInfo
    const {setToken, setUserName, setIsLoggedIn} = setterFuncts
    // const [userName, setUserName]= useState("")
    const [password, setPassword]= useState("")
    // const [token, setToken]= useState("")
    // const [isLoggedIn, setisLoggedIn]= useState(false)
    let history = useHistory()

    return (
    <div>
            <div className="input-form">
                <form
                onSubmit={(event) => {
                    event.preventDefault()
                    login(userName, password, setToken)
                    // console.log("Login attempted")
                    setUserName("")
                    setPassword("")
                    history.push("/")
                }}
                >
                    <div className="form">
                        <div className="login">Login</div>
                        <div className="formDiv">
                            <input 
                            type ="text"
                            value={userName}
                            onChange={({target: {value}}) => setUserName(value)}
                            placeholder="Username"
                            required
                            />
                        </div>
                        
                        <div className="formDiv">
                            <input
                            type="password"
                            value={password}
                            onChange={({target: {value}}) => setPassword(value)}
                            placeholder="Password"
                            required
                            />
                        </div>
                        <button type="submit"> Login </button>
                    </div>
                </form>
            </div>
    </div> 
    )
}

export default Login