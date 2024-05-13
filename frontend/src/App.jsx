import { useEffect, useState } from "react";
import io from "socket.io-client";
import '/BackStyle.css';

// const socket = io("http://localhost:3001");
const socket = io("/");

export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage)

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages(state => [message, ...state]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages(state => [newMessage, ...state]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="blurred-box p-10 rounded-xl w-1/2">
        <h1 className="text-2xl font-bold my-2">Chat</h1>

        <ul className="h-80 overflow-y-auto flex flex-col-reverse rounded-md">
          {messages.map((message, index) => (
              <li
                  key={index}
                  className={`my-2 p-2 block text-sm rounded-md ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black mr-auto"
                  }`}
              >
              <span className={'block text-xs text-slate-300'}>
                {message.from}
              </span>
                <span className={'text-sm'}>
                {message.body}
              </span>
              </li>
          ))}
        </ul>

        <input
            name="message"
            type="text"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 p-2 w-full text-white rounded-md blurred-box"
            value={message}
            autoFocus
        />
      </form>
    </div>
  );
}
