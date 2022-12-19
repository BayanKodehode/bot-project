const greetingResponses = [
    'Hello there! How can I help you today?',
    'Hi there! What can I do for you today?',
    'Good morning/afternoon/evening! How can I assist you?',
  ];
  
  const weatherResponses = [
    "I'm sorry, I am unable to provide weather information.",
    "I'm sorry, I don't have access to weather information at this time.",
    "I'm sorry, I am not able to provide weather information at the moment.",
  ];
  
  const defaultResponses = [
    'I am not sure how to respond to that. Could you try rephrasing your message?',
    "I'm sorry, I didn't understand your message. Could you please rephrase it?",
    'Could you please clarify your message for me?',
  ];  
  // it will be more logic here later to respond to optional messages
  export const generateResponse = (message: string, greeting: string) => {
    if (message.includes('hello')) {
      return greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
    } else if (message.includes('weather')) {
      return weatherResponses[Math.floor(Math.random() * weatherResponses.length)];
    } else {
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    } // need mor logic here later so it can be smarter 
  };

  