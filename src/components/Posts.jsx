import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/index.js'
import deletePost from '../api/deletepost.js'
import apiMessage from '../api/apimessages.js'

const Posts = ({userInfo}) => {
    // const posts= props.posts
    const token = userInfo.token
    const isLoggedIn = userInfo.isLoggedIn
    const [postList, setPosts] = useState([])
    const [content, setContent] = useState("")
    const fetchPosts = async () => {
        await getPosts(setPosts)

    }
    useEffect(() => {
        fetchPosts()
    },[token, fetchPosts])

    const Delete = (postID) => {
        deletePost(postID)
    }
    const sendMessage = async (postID) => {
        event.preventDefault()
        const value = document.getElementById(postID).value
        console.log(value)
        
        apiMessage(postID, token, value)
    }
    return (
        <div className="post-list">
            {postList && postList.map((post) => {
                return (
                    <div key={post._id} className="posts"> 
                    <img className="tack" src="https://www.clipartmax.com/png/small/13-130494_thumbtack-board-pin-clipart-clipartfest-push-pin-png.png" alt="Thumbtack Board Pin Clipart Clipartfest - Push Pin Png @clipartmax.com"/>
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-desc">{post.description}</div>
                        <div className="price">Price: {post.price}</div>
                        <h2 className="seller">Seller: {post.author.username}</h2>
                        <div className="location">Location: {post.location}</div>
                        {post.isAuthor && (
                        <div className="isAuthor">Author</div>
                        )}
                        {post.isAuthor && (
                            <button className="del-button" onClick={() =>Delete(post._id)}>Delete Post</button>
                        )}
                        {!post.isAuthor && token && (
                            <div className="message-form">
                                <form
                                onSubmit={(event) => {
                                event.preventDefault()
                                sendMessage(post._id)
                            }}
                                >
                                    <input
                                        id={post._id}
                                        type ="text"
                                        // value={content}
                                        // onChange={({target: {value}}) => setContent(value)}
                                        placeholder="Username"
                                        required
                                        />
                                    
                                    <button type="submit"
                                    name="submit"
                                    className={post._id}
                                    >Submit Message</button>
                                
                                </form>
                            </div>
                        )
                        }
                    </div>
                )
            })}
        </div>
    )

}
export default Posts