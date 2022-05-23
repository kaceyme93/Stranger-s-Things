import React from "react";
import ReactDOM from 'react-dom'
import { useState } from "react"
import register from '../api/apiregister'
import { useHistory } from "react-router-dom";

const Register = ({userInfo, setterFuncts}) => {
    const {token, userName, isLoggedIn} = userInfo
    const {setToken, setUserName, setIsLoggedIn} = setterFuncts
    // const [token, setToken] = useState("")
    // const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setcPassword] = useState("")
    const history = useHistory()

    return (
        // Register Form
        <div className="input-form">
            <form
            onSubmit={(event) => {
                event.preventDefault()
                register(userName, password, setToken)
                history.push("/")
                // console.log("Registration attempted")

            }}
            >
                <div className="form">
                    <div className="register">Register Here!</div>
                    <div className="formDiv">
                        <input 
                        type ="text"
                        value={userName}
                        onChange={({target: {value}}) => setUserName(value)}
                        placeholder="Username"
                        minLength="7"
                        maxLength="20"
                        required
                        />
                    </div>
                    
                    <div className="formDiv">
                        <input
                        type="password"
                        value={password}
                        onChange={({target: {value}}) => setPassword(value)}
                        placeholder="Password"
                        minLength="7"
                        maxLength="20"
                        required
                        />
                    </div>

                    < div className="formDiv">
                        <input
                        type="password"
                        value={cPassword}
                        onChange={({target: {value}}) => setcPassword(value)}
                        placeholder="Confirm Password"
                        minLength="7"
                        maxLength="20"
                        required
                        />
                    </div>
                    <button type="submit"> Register </button>
                </div>
            </form>
        </div>
        
    )
}
export default Register