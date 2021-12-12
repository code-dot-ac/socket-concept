import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Message from "./components/message";
import Modal from "./components/modal";
import MessageBox from "./components/messageBox";
import Sidebar from "./components/sidebar";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.on("connect", () => {
      console.log("connected");
    });

  }, []);

  return (
    <div className={styles.app}>
      <Modal />
      <Sidebar users={['proevilz', 'gamesmad']}/>
      <div className={styles.container}>
        <div className={styles.messages}>
          {messages.map((message, index) => (<Message key={index} message={message} />))}            
        </div>
        <MessageBox />
      </div>
    </div>
  );
}

export default App;
