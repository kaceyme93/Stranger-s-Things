const BASE_URL= process.env.REACT_APP_BASEURL
const token = window.localStorage.token

const apiCreatePost = (title, description, price, location, willDeliver) => {
    fetch(BASE_URL+"/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
            willDeliver,
          }
        })
      }).then(response => response.json())
        .then(result => {
        //   console.log(result);
        })
        .catch(console.error);
}
export default apiCreatePost