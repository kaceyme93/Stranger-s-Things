import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import getUserInfo from '../api/apiUserInfo'
import Paper from '@mui/material/Paper'

const Messages = ({userName}) => {
    const [messages, setMessages] = useState([])
    const username = localStorage.getItem('username')

    console.log("USERNAME", username)
    const fetchMessages = async () => {
        await getUserInfo(setMessages)
    }
    useEffect(() => {
        fetchMessages()
    }, [])

    return(
        <div className="message-list">
            {messages.length >0? messages.map((message) => {
                if (message.fromUser.username !== username){
                    return (
                        <Paper key={message._id} className="messages" elevation={3}>
                            <div className="message-info">
                                From: {message.fromUser.username}
                            </div>
                            <div className="message-info">
                                Message: {message.content}
                            </div>
                            <div className="message-info">
                                On Post: {message.post.title}
                            </div>
                        </Paper>
                    )
                }
            }): <h1>Inbox Empty</h1>}
        </div>    
    )
}

export default Messages