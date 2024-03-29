//This file will handle the login process and all associated API calls
const BASE_URL= process.env.REACT_APP_BASEURL

const login = (username, pwd, setToken, setUserName, setIsLoggedIn) => {
    fetch(BASE_URL+"/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: pwd
        }
      })
    }).then(response => response.json())
      .then(result => {
        const token = result.data.token
        setToken(token)
        setIsLoggedIn(true)
        localStorage.setItem('token', token);
        localStorage.setItem('username', username)
      })
      .catch(console.error);
}
export default login
