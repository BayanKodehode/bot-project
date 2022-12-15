import React, { useState } from 'react';

interface BotProps {
  children: string;
}

const Bot = ({children} : BotProps) => { 
  const [responses, setResponses] = useState<string[]>([]);

  const handleSendResponse = (respons: string) => {
    setResponses([...responses, respons]);
    // generate chatbot response and add it to the respons list
    // but this need more logic to handle the fast response
    setTimeout(() => {
      const response = generateResponse(respons);
      setResponses([...responses, response]);
    }, 2000);     // not good and might need changing the logic here but still working for now
  };

  return (
    <div className="text-5xl pt-20 px-40">
      <h1>Chatbot</h1>
      {children}
      <div className="p-5">
        {responses.map((respons) => (
          <div>{respons}</div>
        ))}
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" onChange={(event) => handleSendResponse(event.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const generateResponse = (respons: string) => {
  if (respons.toLowerCase().includes('hello')) {
    return 'Hello! How are you today?';
  } else {
    return "I'm sorry, I didn't understand what you said.";
  }
};

export default Bot;
