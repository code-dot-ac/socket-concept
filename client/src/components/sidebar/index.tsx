import styles from './sidebar.module.css';
interface IProps {
    users: string[];
}
const Sidebar = ({users}:IProps) => {
    return(
        <div className={styles.sidebar}>
            <h3>Users</h3>
            <ul>
                <li>ProEvilz</li>
                <li>Gamesmad</li>
            </ul>
        </div>
    );
};

export default Sidebar;