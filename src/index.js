import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
Posts, 
Register,
Login,
CreatePost,
Navbar,
Messages
// 
}from './components';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const App = () => {
  const [token, setToken] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  const checkToken = () => {
    const token = localStorage.getItem('token')
    if (token) {setToken(token) && setIsLoggedIn(true)}
  }
  useEffect(() => {
    checkToken()
  },[])

  const userInfo = {
    "token": token,
    "isLoggedIn": isLoggedIn,
    "userName": userName,

  }
  const setterFuncts = {
    "setIsLoggedIn": setIsLoggedIn,
    "setToken": setToken,
    "setUserName": setUserName
  }
  return (
  <BrowserRouter>
    <div className="app">
      
      <div id="main-section">
        <Navbar userInfo={userInfo} setterFuncts={setterFuncts}/>
        <Route exact path="/">
          <Posts userInfo={userInfo}/>
        </Route>
        <Route path="/login">
          <Login userInfo={userInfo} setterFuncts={setterFuncts}/>
        </Route>
        <Route path="/register">
          <Register userInfo={userInfo} setterFuncts={setterFuncts}/>
        </Route>
        <Route path="/create">
          <CreatePost userInfo={userInfo}/>
        </Route>
        <Route path="/me">
          <Messages userInfo={userInfo} setterFuncts={setterFuncts} userName={userName}/>
        </Route>
      </div>
    </div>
  </BrowserRouter>
  )}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);