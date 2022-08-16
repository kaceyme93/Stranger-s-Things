import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import getUserInfo from '../api/apiUserInfo'
import Paper from '@mui/material/Paper'

const Messages = ({userName}) => {
    const [messages, setMessages] = useState([])
    const fetchMessages = async () => {
        await getUserInfo(setMessages)
    }
    console.log("MESSAGES", messages)
    console.log('USERNAME', userName)
    useEffect(() => {
        fetchMessages()
    }, [])

    return(
        <div className="message-list">
            {messages && messages.map((message) => {
                if (message.fromUser.username !== userName){
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
            })}
        </div>    
    )
}

export default Messages