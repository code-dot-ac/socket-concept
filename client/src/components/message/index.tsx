import styles from "./message.module.css";

import {IMessage} from '../../App'
const Message = ({ message }: {message: IMessage}) => {
  return (
    <div className={styles.message}>
      <p>{message.username}</p>
      <p>{message.message}</p>
    </div>
  );
};

export default Message;
