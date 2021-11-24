import React from 'react'
import "./Chat.css";
import Avatar from '@mui/material/Avatar';
import { Link } from "@mui/material";
// import { useParams } from 'react-router';

function Chat({name, message, timestamp, profilePic}) {
    // let params = useParams();
    return (
        <Link to="/chats/ChatScreen">
            <div className="chat">        
                <Avatar className="chat_pic" alt={name} src={profilePic} />
                <div className= "details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat_time">{timestamp}</p>
            </div>
        </Link>
    );
}

export default Chat
