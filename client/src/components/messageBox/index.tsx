import { useState } from "react";
import styles from "./messagebox.module.css";

interface IProps {
  onNewMessage: (messsage: string) =>void;
  
}
const MessageBox = ({onNewMessage}:IProps) => {
  const [message, setMessage] = useState('')
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
   
  }
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      console.log(message)
      onNewMessage(message)
      setMessage('')
    }
  }
  return (
    <div className={styles.messageBox}>
      <input placeholder="Message..." value={message} onKeyDown={handleEnter} onChange={handleInput} type="text"/>
    </div>
  );
};

export default MessageBox;
