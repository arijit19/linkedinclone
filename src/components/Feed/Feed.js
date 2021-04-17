
import CreatePost from "../CreatePost/CreatePost";
import CreatePostOptions from "../CreatePostOptions/CreatePostOptions";
import Posts from "../Posts/Posts";
import styles from "./feed.module.css";

const Feed = ()=> {
    return (
    <div className={styles.feed}>
        <div className={styles.feed__inputContainer}>
            <CreatePost/>
            <CreatePostOptions/>
        </div>
        {/* <Posts/> */}
        <Posts/>
    </div>)
}

export default Feed;