import { useState } from "react";
import styles from "./modal.module.css";

interface IProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  
}
const Modal = ({ setUsername}: IProps) => {
  const [name, setName] = useState("");
  const handleClick = () => {
    setUsername(name)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h1>Who are you?</h1>
        <input type="text" placeholder="Username" value={name} onChange={handleChange}/>
        <button onClick={handleClick}>Enter</button>
      </div>
    </div>
  );
};

export default Modal;
