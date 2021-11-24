import React from "react";
import "./Chats.css";
import Chat from "./Chat";
function Chats() {
    return (

            <div className="chats">
                <Chat
                name="Zuck"
                message="You part of the Illuminati? If not this is a joke, ignore"
                timestamp="30 minutes ago"
                profilePic="http://jerichochambers.com/wp-content/uploads/2018/03/Screen-Shot-2018-04-11-at-10.26.27.png"/>
                <Chat
                name="Elon"
                message="You part of the Illuminati? If not this is a joke, ignore"
                timestamp="30 minutes ago"
                profilePic="https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"/>
            </div>
        
    )
}

export default Chats
