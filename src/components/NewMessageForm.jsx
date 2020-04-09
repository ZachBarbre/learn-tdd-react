import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('')

    const handleClick = () => {
        onSend(inputText);
        setInputText('');
    }

    const handleChange = e => {
        setInputText(e.target.value);
    }

    return (
        <div>
            <input 
                type='text' 
                data-testid="messageText" 
                value={inputText}
                onChange={handleChange}/>
            <button onClick={handleClick} data-testid="sendButton">Send</button>
        </div>
    )
}

export default NewMessageForm;