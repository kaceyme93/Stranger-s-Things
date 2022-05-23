// File to house API fetch
const BASE_URL= process.env.REACT_APP_BASEURL
// export const BASE_URL=`https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt`
// export const posts=`https://strangers-things.herokuapp.com/api/2022-ftb-et-web-pt/posts`

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
            // result.data.posts, 
            // console.log("Result", result.data.posts)
        )
    })
    .catch(console.error);
}
// export default getPosts
// export async function fetchPosts() {
//     try {
//     const response = await fetch(`${BASE_URL}/posts`
//     )
//         const results = await response.json()
//         const data = results.data.posts
//         console.log("data is ", data)

//         if (results.error) throw results.error
//         return data
//     } catch (error) {
//         throw error
//     }
// }
// fetchPosts()
