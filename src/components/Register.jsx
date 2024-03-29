import React from "react";
import ReactDOM from 'react-dom'
import { useState } from "react"
import register from "../api/apiregister";
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

    export default function Register({userInfo, setterFuncts}) {
    const {token, userName, isLoggedIn} = userInfo
    const {setToken, setUserName, setIsLoggedIn} = setterFuncts
    const [password, setPassword]= useState("")
    const [cPassword, setcPassword] = useState("")
    let history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        register(userName, password, setToken)
        setIsLoggedIn(true)
        setTimeout(() =>{localStorage.getItem("token")? history.push("/"): window.alert("Error registering your account. Please try again with a different username and/or password.")}, 200)
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
              New User?
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
                minLength="7"
                maxLength="20"
                value={password}
                onChange={({target: {value}}) =>setPassword(value)}
                // error={password.length<7}
                // helperText={password.length<7? "Password must be at least 7 characters": ""}
              />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                minLength="7"
                maxLength="20"
                value={cPassword}
                onChange={({target: {value}}) =>setcPassword(value)}
                // error={cPassword!==password}
                // helperText={cPassword!==password? "Passwords do not match": ""}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  } 

// import ReactDOM from 'react-dom'
// import { useState } from "react"
// import register from '../api/apiregister'
// import { useHistory } from "react-router-dom";

// const Register = ({userInfo, setterFuncts}) => {
//     const {token, userName, isLoggedIn} = userInfo
//     const {setToken, setUserName, setIsLoggedIn} = setterFuncts
//     // const [token, setToken] = useState("")
//     // const [userName, setUserName] = useState("")
//     const [password, setPassword] = useState("")
    // const [cPassword, setcPassword] = useState("")
//     const history = useHistory()

//     return (
//         // Register Form
//         <div className="input-form">
//             <form
//             onSubmit={(event) => {
//                 event.preventDefault()
//                 register(userName, password, setToken)
//                 setIsLoggedIn(true)
//                 setTimeout(() =>{localStorage.getItem("token")? history.push("/"):console.log("Whoops")}, 100)
//             }}
//             >
//                 <div className="form">
//                     <div className="register">Register Here!</div>
//                     <div className="formDiv">
//                         <input 
//                         type ="text"
//                         value={userName}
//                         onChange={({target: {value}}) => setUserName(value)}
//                         placeholder="Username"
//                         minLength="7"
//                         maxLength="20"
//                         required
//                         />
//                     </div>
                    
//                     <div className="formDiv">
//                         <input
//                         type="password"
//                         value={password}
//                         onChange={({target: {value}}) => setPassword(value)}
//                         placeholder="Password"
//                         minLength="7"
//                         maxLength="20"
//                         required
//                         />
//                     </div>

//                     < div className="formDiv">
//                         <input
//                         type="password"
//                         value={cPassword}
//                         onChange={({target: {value}}) => setcPassword(value)}
//                         placeholder="Confirm Password"
//                         minLength="7"
//                         maxLength="20"
//                         required
//                         />
//                     </div>
//                     <button type="submit"> Register </button>
//                 </div>
//             </form>
//         </div>
        
//     )
// }
// export default Register