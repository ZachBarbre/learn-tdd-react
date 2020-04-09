import React from 'react';

const MessageList = ({ data }) => {
    return(
        <ul>
            {data.map((message, index) => (
                <li key={`${message}-${index}`}>{message}</li>
            ))}
        </ul>
    )
}

export default MessageList;