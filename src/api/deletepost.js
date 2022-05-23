const BASE_URL= process.env.REACT_APP_BASEURL
const token = window.localStorage.token

const deletePost = async (postId) => {
    fetch(BASE_URL+"/posts/"+postId, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}
export default deletePost