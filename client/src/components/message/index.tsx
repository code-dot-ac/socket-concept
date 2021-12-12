import styles from "./message.module.css";

interface IProps {
  message: string;
  user: string;
}
const Message = ({ message, user }: IProps) => {
  return (
    <div className={styles.message}>
      <p>{user}</p>
      <p>{message}</p>
    </div>
  );
};

export default Message;
