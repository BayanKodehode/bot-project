import React, { useState } from 'react';

interface BotProps {
  children: string;
}

const Bot: React.FC<BotProps> = ({ children }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
    // generate chatbot response and add it to the message list
    // but the need more logic to handle the fast response
    setTimeout(() => {
      const response = generateResponse(message);
      setMessages([...messages, response]);
    }, 3000);     // not good might need changing the logic here | still working for now
  };

  return (
    <div className=" text-5xl pt-20 px-40">
      <h1>Chatbot</h1>
      {children}
      <div className="p-5">
        {messages.map((message) => (
          <div>{message}</div>
        ))}
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" onChange={(event) => handleSendMessage(event.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const generateResponse = (message: string) => {
  if (message.toLowerCase().includes('hello')) {
    return 'Hello! How are you today?';
  } else {
    return "I'm sorry, I didn't understand what you said.";
  }
};

export default Bot;
