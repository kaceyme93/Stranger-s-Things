import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Navbar = ({userInfo, setterFuncts}) => {
    const token = userInfo.token
    const setToken = setterFuncts.setToken
    
    const logout = () => {
        setToken("")
        localStorage.removeItem('token', token)
    }
    // console.log("token iss", token)
    return (
        <div className='navbar'>
            <img id="logo" src='https://previews.dropbox.com/p/thumb/ABhwvUJfPiD-KOrYjPlk4RFrFzIJhf71FsRp0vlQR6gIJiMKmq1_OXKwrz7cPUhTUy76WSGQb4H5TesbT-BOZZQgRSyqac1quDicczCmje_mrjaEs7N8iw3bBixDW3Rp_wgExXrWRm3o7NYuum-tI-etXy1YJjgbbMmpbP2rMf7wYSloDTnYr68IQlopdWTvZSYKrBQBi12gXZ9537gKBQlIfaBFDbHG6hl6OH8PSAY989TR8dnITX9eStg4Glef6dBHV6sZOFzUatZpp63YdYA4Q_5YSPiRlv680wJ_YnqRUoMeBM6zpWPDSRf7qm2tcXJlwsIDOMAknV2OQ-U7wH2Re9bZoLs7kSjST8wkhqKkwcSMsa5_i9fcJbR1CYP8vEk/p.jpeg'/>
            <div className="links">
                <Link className="link" to="/">HOME</Link>

                {token && (
                    <Link className="link" onClick={logout} to="/login">LOGOUT</Link>
                )}
                {token && (
                    <Link className="link" to="/create">CREATE POST</Link>
                )}
                {!token &&(
                    <Link className="link" to="/login">LOGIN</Link>
                )}
                {!token && (
                    <Link className="link" to="/register">REGISTER</Link>
            )} 
            </div>
      </div>
    )
}

export default Navbar