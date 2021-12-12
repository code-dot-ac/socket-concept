import { io, Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Message from "./components/message";
import Modal from "./components/modal";
import MessageBox from "./components/messageBox";
import Sidebar from "./components/sidebar";

export interface IMessage {
  message: string;
  username: string;
}
const App = () => {
  const [socket, setSocket] = useState<Socket>();
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const socket = io("http://localhost:4001");
    setSocket(socket);
  }, []);

  useEffect(() => {
    if (username.length && socket) {
      socket.emit("set:username", username);
      socket.emit("get:usernames");
      socket.on("user:list", (connectedUsers) => {
        const users = connectedUsers.map(
          (userObj: { username: string; socketId: string }) =>
            userObj.username ?? "Anonymous"
        );
        setUsers(users);
      });
      socket.on("send:message", (payload) => {
        console.log("payload: ", payload);
        setMessages((prev) => [...prev, payload]);
      });
    }
  }, [username]);

  const handleAddMessage = (message: string) => {
    setMessages((prev) => [...prev, { message, username }]);
    socket?.emit("send:message", message);
  };
  return (
    <div className={styles.app}>
      {!username?.length && <Modal setUsername={setUsername} />}
      <Sidebar users={users} />
      <div className={styles.container}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <MessageBox onNewMessage={handleAddMessage} />
      </div>
    </div>
  );
};

export default App;
