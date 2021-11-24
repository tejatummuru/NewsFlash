import React, {useState} from 'react'
import "./ChatScreen.css";
import Avatar from '@mui/material/Avatar';
function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ur Mom",
            image: "https://media.glamour.com/photos/61682fdcbd3b64b6626bcc1f/master/w_2560%2Cc_limit/1343723358",
            message: "Whats up"
        },
        {
            name: "Ur Mom",
            image: "https://media.glamour.com/photos/61682fdcbd3b64b6626bcc1f/master/w_2560%2Cc_limit/1343723358",
            message: "goteem"
        }
    ])
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <h2>ChatScreen</h2>
            {messages.map((message) =>  
                message.name ? (
                    <div className="chatScreen_message">
                    <Avatar className="chatScreen_image" alt={message.name} scr={message.image}/>
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen_message">
                    <Avatar className="chatScreen_image" alt={message.name} scr={message.image}/>
                    <p className="chatScreen_textUser">{message.message}</p>
                </div>  
                )
            )}
            <form className ="chatScreen_input">
                <input 
                value={input} 
                onChange={e => setInput(e.target.value)}
                className="chatScreen_field" 
                placeholder="Type a message..." 
                text="text"
                />
                <button onClick={handleSend} type="submit" className="input_button"></button>
            </form>
        </div>
    )
}
    
export default ChatScreen
