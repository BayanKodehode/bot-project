import * as React from "react";

type ButtonProps = {
  isVisible: boolean;
  onAgree: () => string;
  onDeny: () => string;
};

export const HideShowButton = (props: ButtonProps) => {

  if (!props.isVisible) {
    return null;
  }
  return (
    <div>
      <button
        className="text-white p-4 m-2 bg-lime-600 box-border rounded-xl"
        onClick={props.onAgree}
      >
        Agree
      </button>
      <button
        className="text-white p-4 m-2 bg-red-600 box-border rounded-xl"
        onClick={props.onDeny}
      >
        Deny
      </button>
    </div>
  );
};

const greetingResponses = [
  "Hello there! How can I help you today?",
  "Hi there! What can I do for you today?",
  "Good morning/afternoon/evening! How can I assist you?",
];

const weatherResponses = [
  "I'm sorry, I am unable to provide weather information.",
  "I'm sorry, I don't have access to weather information at this time.",
  "I'm sorry, I am not able to provide weather information at the moment.",
];

const defaultResponses = [
  "I am not sure how to respond to that. Could you try rephrasing your message?",
  "I'm sorry, I didn't understand your message. Could you please rephrase it?",
  "Could you please clarify your message for me?",
];
const optionalResponses = [
  "How about some hints?",
  "Would you like to have some hints here?",
  "Do you need some help to answer this?",
];
export const generateResponse = (
  message: string,
  greeting: string,
  buttonProps: ButtonProps
) => {
  if (message.includes("hello")) {
    return greetingResponses[
      Math.floor(Math.random() * greetingResponses.length)
    ];
  } else if (message.includes("weather")) {
    return weatherResponses[
      Math.floor(Math.random() * weatherResponses.length)
    ];
  } else if (message.includes("hints")) {
    return optionalResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
    // how can we callback this component here and change the prop isVisible to true
    HideShowButton(isVisible) // its not working here 
  } else {
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  }
};
