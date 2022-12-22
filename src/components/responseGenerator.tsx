import * as React from "react";
import { Bot } from "../bot";


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
  "yup, How about some hints?",
  "Would you like to have some hints here?",
  "Do you need some help to answer this?",
];
const affirmativeResponses = [
  "Great! Is there anything else I can help with?",
  "Sounds good! Do you have any other questions?",
  "Alright! Do you need help with anything else?",
];

const negativeResponses = [
  "Alright, let me know if you need anything else.",
  "No problem. Let me know if you have any other questions.",
  "Understood. Let me know if you need further assistance.",
];
export function generateResponse(
  message: string,
  greeting: string,
  toggleVisibility: () => void
) {
  if (message.includes("hello")) {
    return greetingResponses[
      Math.floor(Math.random() * greetingResponses.length)
    ];
  } else if (message.includes("help")) {
    return `Yup! How am I help you?`;

  } else if (message.includes("weather")) {
    return weatherResponses[
      Math.floor(Math.random() * weatherResponses.length)
    ];
  } else if (message.toLowerCase().includes("hints")) {
    return (
      toggleVisibility(),
      optionalResponses[Math.floor(Math.random() * optionalResponses.length)]
    );
  } else if (message.includes("yes")) {
    return affirmativeResponses[
      Math.floor(Math.random() * affirmativeResponses.length)
    ];
  } else if (message.includes("no")) {
    return negativeResponses[
      Math.floor(Math.random() * negativeResponses.length)
    ];
  } else {
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  }
}
