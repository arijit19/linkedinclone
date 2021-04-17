import styles from "./recentItem.module.css";

const RecentItem = ({topic})=> {
    return (
        <div className={styles.recentItem}>
            <span className={styles.recentItem__hash}>#</span>
            <p>{topic}</p>
        </div>
    )
}

export default RecentItem;