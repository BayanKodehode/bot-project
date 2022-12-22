import * as React from "react";
import { useState, useEffect } from "react";
import { generateResponse } from "./components/responseGenerator";
import { HideShowButton, ButtonProps } from "./components/HideShowButton.tsx";

interface IBot {
  greeting: string;
}

export const Bot = ({ greeting }: IBot) => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const handleAgree = (response: string) => {
    console.log(`You agreed to ${response}`); // need to have more effective actions here
    setResponse("");
  };

  const handleDeny = (response: string) => {
    console.log(`You denied ${response}`); // need to have more effective actions here
    setResponse("");
  };

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  useEffect(() => {
    document.title = `${name} in the house`;
  }, [name]);

  // useEffect(() => {             // can try with this later
  //   const handleResponse = () => {
  //    // it can be any action here
  //   };

  //   handleResponse();
  // }, [message]);

  return (
    <div className="bg-gray-500 p-40 m-10 text-5xl text-white">
      {conversation.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
      {!name && (
        <form
          className="text-black"
          onSubmit={(e) => {
            e.preventDefault();
            setName(message);
            setTimeout(() => {
              setConversation([
                ...conversation,
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
          <button className="text-white p-5" type="submit">
            Submit
          </button>
        </form>
      )}
      {name && (
        <form
          className="text-black"
          onSubmit={(e) => {
            e.preventDefault();
            setConversation([...conversation, message]);
            setTimeout(() => {
              setConversation([
                ...conversation,
                generateResponse(message, greeting, toggleVisibility),
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
          <button className="text-white p-5" type="submit">
            Send
          </button>
          <HideShowButton
            onAgree={handleAgree}
            onDeny={handleDeny}
            toggleVisibility={toggleVisibility}
            visibility={visibility}
          />
        </form>
      )}
    </div>
  );
};

export default Bot;
