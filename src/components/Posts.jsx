import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/index.js'
import deletePost from '../api/deletepost.js'
import sendMessage from '../api/apimessages.js'

const Posts = ({userInfo}) => {
    // const posts= props.posts
    const token = userInfo.token
    const [postList, setPosts] = useState([])
    const [content, setContent] = useState("")
    const fetchPosts = async () => {
        await getPosts(setPosts)
        // setPosts(returnedData)

    }
    useEffect(() => {
        fetchPosts()
    },[token, fetchPosts])
    // console.log("Post list is" +postList);

    const Delete = (postID) => {
        deletePost(postID)
    }
    const messageForm = (postID) => {
        return (
            <aside> Hello!
                {/* <form
                onSubmit={(event) => {
                    event.preventDefault()
                    sendMessage(postID, content)
                    setContent("")
                }}
                >
                    <div className="form">
                        <div className="send=mess">Send Message</div>
                        <div className="formDiv">
                            <input
                            type="text"
                            value={content}
                            onChange={({target: {value}}) => setContent(value)}
                            placeholder="Type Message Here"
                            required
                            />
                        </div>
                        <button type="submit">Submit Message</button>
                    </div>
                </form> */}
            </aside>
        )
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
                        {!post.isAuthor && (
                            <img className="mail-icon" src="https://www.pngkit.com/png/detail/11-119830_mail-icons-free-and-small-mail-icon-white.png"
                            onClick={() => messageForm(post._id)}
                            />
                        )
                        }
                    </div>
                )
            }       
            
            )}
        </div>
    )

}
export default Posts