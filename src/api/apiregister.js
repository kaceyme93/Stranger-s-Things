//This file will be used to implement the register and all associated API calls
const BASE_URL= process.env.REACT_APP_BASEURL;

const register = (username, password, setToken) => {
    fetch(BASE_URL+"/users/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    }).then(response => response.json())
      .then(result => {
        const token = result.data.token
        setToken(token)
        localStorage.setItem('token', token)
        console.log("token is", token);
      })
      .catch(console.error);
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       username: username,
    //       password: pwd
    //     }
    //   })
    // }).then(response => response.json())
    //   .then(result => {
    //     const token = result.data.token
    //     console.log(result)
    //     setToken(token)
    //     localStorage.setItem('token', token);
    //   })
    //   .catch(console.error);
    // console.log("Submitting ", username, pwd)
    // const jwtResponse= "abc"
}

export default register