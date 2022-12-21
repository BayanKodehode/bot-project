import * as React from 'react';
import { generateResponse, HideShowButton, ButtonProps } from "./components/responseGenerator";

interface IBot {
  greeting: string;
}

export const Bot = ({ greeting }: IBot, {visibility}: ButtonProps) => {
  const [conversation, setConversation] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");

  const [QResponseVisibility, setQResponseVisibility] = React.useState<boolean>(true);
  visibility = QResponseVisibility;
  
`  // React.useEffect(() => {
  //   return;
  // });`

  const handleAgree = () => {
    console.log('agreement');
  };

  const handleDeny = () => {
    console.log('deny');
  };
  return (
    <div className="bg-gray-500 p-40 m-10 text-5xl text-white">
      {conversation.map((msg) => (
        <div key={msg}>{msg}</div>
      ))}
      {!name && (
        <form  className="text-black"
          onSubmit={(e) => {
            e.preventDefault();
            setName(message);
            setTimeout(() => {              
            setConversation([...conversation,
              `${greeting} ${message}, nice to meet you! What can I help you with today?`,
            ]);
          }, 3000);
            setMessage("");
          }}
        >
          <input
            className="p-5"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your name"
          />
          <button className="text-white p-5" type="submit">Submit</button>
          <HideShowButton onAgree={handleAgree} onDeny={handleDeny} 
          visibility={visibility} />
        </form>
      )}
      {name && (
        <form className="text-black"
          onSubmit={(e) => {
            e.preventDefault();
            setConversation([...conversation, message]);
            setTimeout(() => {              
              setConversation([...conversation,
                generateResponse(message, greeting),
              ]);
            }, 2000);
            setMessage("");
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button  className="text-white p-5" type="submit">Send</button>
          <HideShowButton onAgree={handleAgree} onDeny={handleDeny} 
          visibility={visibility}/>
        </form>
      )}
    </div>
  );
};

export default Bot;

// can try with react-simple-chatbot pakage later on
