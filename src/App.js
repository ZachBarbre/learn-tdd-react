import React, { useState } from 'react';
import NewMessageForm from './components/NewMessageForm.jsx';
import MessageList from './components/MessageList.jsx';

function App() {
  const [messages, setMessages] = useState([]);
  const handlleSend = NewMessage => {
    setMessages([NewMessage, ...messages]);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <NewMessageForm onSend={handlleSend} />
      <MessageList data={messages} />
    </div>
  );
}

export default App;
