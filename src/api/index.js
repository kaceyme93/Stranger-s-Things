// File to house API fetch
const BASE_URL= process.env.REACT_APP_BASEURL

export const getPosts = async (setPosts) => {
    fetch(`${BASE_URL}/posts`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => response.json())
    .then(result => {
        return (
            setPosts(result.data.posts)
        )
    })
    .catch(console.error);
}
