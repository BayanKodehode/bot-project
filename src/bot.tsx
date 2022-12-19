import * as React from 'react';
import { generateResponse } from "./components/responseGenerator";

interface IBot {
  greeting: string;// might need more here later on if needed for reasonable defaults
}

type ButtonProps = {            // tryieng onother type props here 
  onAgree: () => void;
  onDeny: () => void;
}

function HideShowButton(props: ButtonProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div>
      {isVisible && (
        <>
          <button className="text-white p-5 m-2 bg-lime-600 box-border rounded-xl" 
          onClick={props.onAgree}>Agree</button>
          <button className="text-white p-5 m-2 bg-red-600 box-border rounded-xl" 
          onClick={props.onDeny}>Deny</button>
        </>
      )}
      <button className="text-white p-5 m-2 bg-black box-border rounded-xl" 
      onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}              
      </button>
    </div>
  );
}

const Bot = ({ greeting }: IBot) => {
  const [conversation, setConversation] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");

  const handleAgree = () => {
    console.log("====================================");
    console.log('agreement');
    console.log("====================================");
  };

  const handleDeny = () => {
    console.log("====================================");
    console.log('deny');
    console.log("====================================");
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
            setTimeout(() => {              {'just to show some thinking proses'}
            setConversation([...conversation,
              `${greeting} ${message}, nice to meet you! What can I help you with today?`,
            ]);
          }, 4000);
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
          <HideShowButton onAgree={handleAgree} onDeny={handleDeny} />
        </form>
      )}
      {name && (
        <form className="text-black"
          onSubmit={(e) => {
            e.preventDefault();
            setConversation([...conversation, message]);
            setTimeout(() => {              {'just to show some thinking proses'}
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
          <button  className="bg-red" type="submit">Send</button>
          <HideShowButton onAgree={handleAgree} onDeny={handleDeny} />
        </form>
      )}
    </div>
  );
};

export default Bot;

// can try with react-simple-chatbot pakage later on
