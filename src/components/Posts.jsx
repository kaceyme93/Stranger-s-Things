import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/index.js'
import deletePost from '../api/deletepost.js'
import apiMessage from '../api/apimessages.js'
import Button from '@mui/material/Button';

const Posts = ({userInfo}) => {
    const token = userInfo.token
    const isLoggedIn = userInfo.isLoggedIn
    const [postList, setPosts] = useState([])
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
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-desc">{post.description}</div>
                        <div className="price">Price: {post.price}</div>
                        <h2 className="seller">Seller: {post.author.username}</h2>
                        <div className="location">Location: {post.location}</div>
                        {post.isAuthor && (
                        <div className="isAuthor">Author</div>
                        )}
                        {post.isAuthor && (
                            <Button className="del-button" onClick={() =>Delete(post._id)} variant="contained" color="error">Delete Post</Button>
                        )}
                        {!post.isAuthor && token && (
                            <div className="message-form">
                                <form
                                onSubmit={(event) => {
                                event.preventDefault()
                                sendMessage(post._id)
                            }}
                                >
                                <input className="post-message-input"
                                    id={post._id}
                                    type ="text"
                                    size="small"
                                    variant="outlined"
                                    backgroundColor="white"
                                    placeholder="Type Message"
                                    required
                                    />
                                
                                <Button type="submit"
                                variant="contained"
                                name="submit"
                                className={post._id}
                                >Send Message</Button>
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