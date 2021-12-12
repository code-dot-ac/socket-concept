import { useState } from "react";
import styles from "./modal.module.css";

interface IProps {
  message: string;
  user: string;
}
const Modal = () => {
  const [username, setUsername] = useState("");
  const handleClick = () => {

  }
  const handleChange = () => {
    setUsername(e.target.value)
  }
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h1>Who are you?</h1>
        <input type="text" placeholder="Username" value={username} onChange={handleChange}/>
        <button onClick={handleClick}>Enter</button>
      </div>
    </div>
  );
};

export default Modal;
