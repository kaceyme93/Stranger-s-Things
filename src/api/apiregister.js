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
      })
      .catch(console.error);
    
}

export default register