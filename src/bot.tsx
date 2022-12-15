import React, { useState } from 'react';

const Bot: React = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
    // generate chatbot response and add it to the message list
    // but the need more logic to handle the fast response
    setTimeout(() => {
      const response = generateChatbotResponse(message);
      setMessages([...messages, response]);
    }, 1000);     // not enough time might need changing the logic here
  };

  return (
    <div className=" text-5xl pt-20 px-40">
      <h1> stupid bot but kan be upgraded later LGTM</h1>
      <div className="p-5">
        {messages.map((message, index) => (
          <div>{message}</div>
        ))}
      </div>
      <form onSubmit={event}>
        <input type="text" onChange={(event) => handleSendMessage(event.target.value)} />
        <button type="submit">reset</button>
      </form>
    </div>
  );
};

const generateChatbotResponse = (message: string) => {
  if (message.toLowerCase().includes('hello')) {
    return 'Hello! How are you today?';
  } else {
    return "I'm sorry, I didn't understand what you said.";
  }
};

export default Bot;