import React, { forwardRef } from 'react';
import { Avatar } from "@material-ui/core";

import styles from "./comment.module.css";
import * as selectors from "../../store/selectors/index";
import CommentInputOptions from '../CommentInputOptions/CommentInputOptions';
import Replies from '../Replies/Replies';

const Comment = forwardRef(({name, description, message,uid,postID,likes , commentID,replies},ref)=> {
    const isLiked = selectors.isLiked(uid,likes);
    const likeDocID = selectors.getLikeDocID(uid,likes);
    return (
        <div>
        <div ref={ref} className={styles.comment} >
            <div className={styles.comment__layout}>
                <div className={styles.comment__header}>
                        <Avatar/>
                        <div className={styles.comment__info}>
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                <div className={styles.comment__body}>
                        {message && <p>{message}</p>}
                    </div>
                
            </div>
            <div className={styles.comment__buttons}>
                    <CommentInputOptions postID={postID} commentID={commentID} isLiked={isLiked} likeDocID={likeDocID}/>
            </div>
        </div>
        <div>
                <Replies replies={replies} commentID={commentID}/> 
        </div>
        </div>
    )
})

export default Comment;