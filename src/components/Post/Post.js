import React, { forwardRef, useState } from 'react';
import { Avatar } from "@material-ui/core";

import styles from "./post.module.css";
import PostInputOptions from '../PostInputOptions/PostInputOptions';
import CreateComment from '../CreateComment/CreateComment';
import * as selectors from "../../store/selectors/index";
import Comments from '../Comments/Comments';


const Post = forwardRef(({name, description, message,id,likes,comments ,file, uid},ref)=> {
    const fileType = file && file.type.toString().split('/');
    const [commentClicked, setCommentClicked] = useState(false);
    const isLiked = selectors.isLiked(uid,likes);
    const likeDocID = selectors.getLikeDocID(uid,likes);
    return (
        <div ref={ref} className={styles.post} >
            <div className={styles.post__header}>
                <Avatar/>
                <div className={styles.post__info}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.post__body}>
                <p>{message}</p>
                {(file && fileType[0]=== "image") && 
                    <img src={file.URLValue} alt="Upload" 
                            type={file.type} style={{height: "30%"}}/>}
                    {(file && fileType[0]=== "video") && 
                    <video style={{height: "30%"}}>
                        <source src={file.URLValue} type={file.type}/>
                    </video>}
            </div>
            <div className={styles.post__buttons}>
                <PostInputOptions commentClicked={()=> setCommentClicked(!commentClicked)} postID={id} isLiked={isLiked} likeDocID={likeDocID}/>
            </div>
            {
                (commentClicked && 
                <div className={styles.post__comments}>
                    <CreateComment postID={id}/>
                </div>)
            }
            {
                (comments && commentClicked && 
                    <div>
                        {/*<Comments comments={comments}/> */}
                        <Comments comments={comments} uid={uid}/>
                    </div>)
            }
        </div>
    )
})

export default Post;