import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import {connect} from 'react-redux';

import Comment from "../Comment/Comment";
import * as selectors from "../../store/selectors/index";

const Comments = forwardRef((props,ref)=> {
    let commentsElements = [];
    if(props.comments) {
        for(let comment in props.comments) {
            const commentlikes= selectors.filterObject(comment, props.likes);
            const replys = selectors.filterObject(comment,props.replys);
            commentsElements.push(
                <Comment 
                    key={comment}
                    commentID={comment}
                    postID={props.comments[comment].contentID}
                    name={props.comments[comment].fullName}
                    description={props.comments[comment].email}
                    message={props.comments[comment].message}
                    likes= {commentlikes}
                    uid={props.uid}
                    photoUrl={props.comments[comment].photoURL}
                    replies={replys}/>
            )
        }
    }
    return <FlipMove disableAllAnimations={false}>{commentsElements}</FlipMove>
})




const mapStateToProps = state => {
    return {
      likes: state.data.commentLikes ? state.data.commentLikes : {},
      replys: state.data.replys ? state.data.replys : {},
      uid:state.auth.uid
    }
  }

  export default connect(mapStateToProps)(Comments);