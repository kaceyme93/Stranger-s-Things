import { FormGroup } from '@mui/material';
import React from 'react';
import { useState } from "react"
import apiCreatePost from '../api/apicreatepost';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme()

// const CreatePost = () => {
//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")
//     const [price, setPrice] = useState("$")
//     const [location, setLocation] = useState("On Request")
//     const [willDeliver, setWillDeliver] = useState(false)

//     const handleCheckbox = () => {
//         willDeliver ===false ? setWillDeliver(true): setWillDeliver(false)
//     }

//     return (
//         <div className="create-post">
//                 <form
//                 onSubmit={(event) => {
//                     event.preventDefault()
//                     apiCreatePost(title, description, price, location, willDeliver)
//                     setTitle("")
//                     setDescription("")
//                     setPrice("$")
//                     setLocation("On Request")
//                     setWillDeliver(false)
//                 }}
//                 >

//                     <div className="form">
//                         <div className="create-title">Create Your Post!</div>
//                         <div className="formDiv">
//                             <input
//                             type="text"
//                             value={title}
//                             onChange={({target: {value}}) => setTitle(value)}
//                             placeholder="Title"
//                             required
//                             />
//                         </div>

//                         <div className="formDiv">
//                             <input
//                             type="text"
//                             value={description}
//                             onChange={({target: {value}}) => setDescription(value)}
//                             placeholder="Description"
//                             required
//                             />
//                         </div>

//                         <div className="formDiv">
//                             <input
//                             type="text"
//                             value={price}
//                             onChange={({target: {value}}) => setPrice(value)}
//                             placeholder="Price"
//                             required
//                             />
//                         </div>

//                         <div className="formDiv">
//                             <input
//                             type="text"
//                             value={location}
//                             onChange={({target: {value}}) => setLocation(value)}
//                             placeholder="Location (Optional)"
//                             />
//                         </div>

//                         <div className="formDiv">
//                             <fieldset>
//                             <legend>Will Deliver?</legend>
//                             <label>Yes</label>
//                             <input
//                             type="checkbox"
//                             label="Will Deliver?"
//                             onChange={handleCheckbox}
//                             />
//                             </fieldset>
//                         </div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>      
//         </div>
//     );
// };

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

    export default function CreatePost({userInfo, setterFuncts}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("$")
    const [location, setLocation] = useState("On Request")
    const [willDeliver, setWillDeliver] = useState(false)

    const handleSubmit= (event) => {
        event.preventDefault()
                    apiCreatePost(title, description, price, location, willDeliver)
                    setTitle("")
                    setDescription("")
                    setPrice("$")
                    setLocation("On Request")
                    setWillDeliver(false)
    }

    const handleCheckbox = () => {
        willDeliver ===false ? setWillDeliver(true): setWillDeliver(false)
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
            <Typography component="h1" variant="h5">
              Create Post
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
                value={title}
                onChange={({target: {value}}) =>setTitle(value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                type="description"
                id="description"
                minLength="1"
                multiline
                value={description}
                onChange={({target: {value}}) =>setDescription(value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Price"
                type="price"
                id="price"
                minLength="1"
                value={price}
                onChange={({target: {value}}) =>setPrice(value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="location"
                label="Location"
                type="location"
                id="location"
                value={location}
                onChange={({target: {value}}) =>setLocation(value)}
              />
              <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="Will Deliver?"/>
              </FormGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Your Post
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  } 