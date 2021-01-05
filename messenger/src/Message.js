import React, { forwardRef } from 'react'
import FlipMove from 'react-flip-move'
import './Message.css'
import { FormControl,Input,InputLabel,Card, CardContent, Typography } from '@material-ui/core'
const Message=forwardRef(({ message , username},ref)=> {
    const isUser=username===message.username
    return (
        <div ref={ref} className={`message ${ 
                isUser && 
                'message_user'
                }`}>
                    
            <Card className={isUser ? 
            "message_userCard" : "message_guestCard "
            }>
                <CardContent>
                    <Typography
                    color='white'
                    >
             {message.username}: {message.message}
            </Typography>
            </CardContent>
            </Card>
        </div>
    )
}
)
export default Message
