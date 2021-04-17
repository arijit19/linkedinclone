import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import {connect} from 'react-redux';

import * as selectors from "../../store/selectors/index";
import styles from "./replies.module.css";
import Reply from '../Reply/Reply';

const Replies = forwardRef((props,ref)=> {
    let repliesElements = [];
    if(props.replies) {
        for(let reply in props.replies) {
            const replylikes= selectors.filterObject(reply, props.likes);
            repliesElements.push(
                <Reply 
                    key={reply}
                    replyID = {reply}
                    commentID={props.replies[reply].contentID}
                    postID={props.replies[reply].postID}
                    name={props.replies[reply].fullName}
                    description={props.replies[reply].email}
                    message={props.replies[reply].message}
                    likes= {replylikes}
                    uid={props.uid}
                    photoUrl={props.replies[reply].photoURL}/>
            )
        }
    }
    return <FlipMove disableAllAnimations={false} className={styles.wrapper}>{repliesElements}</FlipMove>
})




const mapStateToProps = state => {
    return {
      likes: state.data.replyLikes ? state.data.replyLikes : {},
      uid:state.auth.uid
    }
  }

  export default connect(mapStateToProps)(Replies);