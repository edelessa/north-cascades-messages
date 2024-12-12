import {useState} from 'react';

function MessageList ( messages ) {
  MessageList
  return (
    <div>
      <h1>MessageList</h1>

      { messages.messages.map( (message, index )=>(
        <li key={index}>{message.name}: {message.text}</li>
      ))}
    </div>
  );

}

export default MessageList
