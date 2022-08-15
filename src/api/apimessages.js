const BASE_URL= process.env.REACT_APP_BASEURL

const apiMessage = (POST_ID, token, content) => {
    fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            message: {
            content
            }
        })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}
export default apiMessage