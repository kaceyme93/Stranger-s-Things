const BASE_URL= process.env.REACT_APP_BASEURL
const token = window.localStorage.token

const getUserInfo = (setMessages) => {
    fetch(BASE_URL+"/users/me", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(response => response.json())
    .then(result => {
        return (
            setMessages(result.data.messages)
        )
    })
    .catch(console.error)
}

export default getUserInfo