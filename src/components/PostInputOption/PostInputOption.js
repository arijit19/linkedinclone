import styles from "./postInputOption.module.css";

const PostInputOption = ({Icon, title, color, onClicked ,clicked})=> {
    let sty = styles.inputOption;
    if(title === "Like") {
        const like =  clicked ? styles.liked : styles.unlike
        sty = [styles.inputOption, like].join(' ');
    }
    return (
            <div className={sty} 
                onClick={onClicked}>
                <Icon styles={{color: color}}/>
                <h4>{title}</h4>
            </div>
         )
}

export default PostInputOption;