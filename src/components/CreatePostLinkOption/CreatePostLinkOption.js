
import styles from "./createPostLinkOption.module.css";
//change div to Link, onClick -> to
const CreatePostLinkOption = ({Icon, title, color, link})=> (
    <div className={styles.inputOption} onClick={link}>
        <Icon styles={{color: color}}/>
        <h4>{title}</h4>
    </div>
)

export default CreatePostLinkOption;