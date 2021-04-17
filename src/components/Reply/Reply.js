import React, { forwardRef } from 'react';
import { Avatar } from "@material-ui/core";

import styles from "./reply.module.css";
import * as selectors from "../../store/selectors/index";
import ReplyInputOptions from '../ReplyInputOptions/ReplyInputOptions';

const Reply = forwardRef(({name, description, message,uid,postID,likes,replyID , commentID},ref)=> {
    const isLiked = selectors.isLiked(uid,likes);
    const likeDocID = selectors.getLikeDocID(uid,likes);
    return (
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
                    <ReplyInputOptions postID={postID} replyID={replyID} commentID={commentID} isLiked={isLiked} likeDocID={likeDocID}/>
            </div>

            
        </div>
    )
})

export default Reply;