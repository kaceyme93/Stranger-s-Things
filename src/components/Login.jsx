import React from "react";
import ReactDOM from 'react-dom'
import { useState } from "react"
import login from "../api/apilogin";
import { useHistory } from "react-router-dom"; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme()

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Stranger's Things
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

    export default function Login({userInfo, setterFuncts}) {
    const {token, userName, isLoggedIn} = userInfo
    const {setToken, setUserName, setIsLoggedIn} = setterFuncts
    const [password, setPassword]= useState("")
    let history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userName, password, setToken, setUserName, setIsLoggedIn)
        setIsLoggedIn(true)
        setUserName("")
        setPassword("")
        setTimeout(() =>{localStorage.getItem("token")? history.push("/"):window.alert("Incorrect username and or password")}, 200)
    }

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" id="login-page">
          <CssBaseline />
          <Box
            sx={{
              padding: 5,
              marginTop: 30,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome Back!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
                value={userName}
                onChange={({target: {value}}) =>setUserName(value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={({target: {value}}) =>setPassword(value)}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }
// const Login = ({userInfo, setterFuncts}) => {
//     const {token, userName, isLoggedIn} = userInfo
//     const {setToken, setUserName, setIsLoggedIn} = setterFuncts
//     const [password, setPassword]= useState("")
//     let history = useHistory()
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         login(userName, password, setToken)
//         setIsLoggedIn(true)
//          setUserName("")
//         setPassword("")
//         setTimeout(() =>{localStorage.getItem("token")? history.push("/"):console.log("Whoops")}, 100)
//     }
    
//     return (
//       <div>
//             <div className="input-form">
//                 <form
//                 onSubmit={handleSubmit}
//                 >
//                     <div className="form">
//                         <div className="login">Login</div>
//                         <TextField id="outlined-basic"
//                           label="Username"
//                           variant="outlined"
//                           value={userName}
//                           onChange={({target: {value}}) =>setUserName(value)}
//                           required />
                        
//                         <TextField id="outlined-basic" 
//                           label="Password"
//                           variant="outlined"
//                           type="password"
//                           value={password}
//                           onChange={({target: {value}}) =>setPassword(value)}
//                           required />
//                         <Button type="submit" variant="contained"> Login </Button>
//                     </div>
//                 </form>
//             </div>
//         </div> 
//     )   
// }

// export default Login