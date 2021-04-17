import React, {Component} from 'react';
import {connect} from 'react-redux';


import styles from "./commentInputOptions.module.css";
import * as actions from "../../store/actions/index";
import { CommentInputData } from '../../data/CommentInputData';
import CommentInputOption from '../CommentInputOption/CommentInputOption';


class CommentInputOptions extends Component {
    

    render() {
        
        return (
            <div className={styles.inputOptions}>
                {CommentInputData.map( (element,index)=> (
                    <CommentInputOption 
                        key={index}
                        title={element.title}
                        Icon={element.Icon}
                        uid={this.props.uid}
                        clicked= {this.props.isLiked}
                        color={element.color}
                        postID={this.props.postID} 
                        commentID={this.props.commentID}
                        likeDocID={this.props.likeDocID}/>
            ))}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        likePost: (likes)=> (dispatch(actions.likePostDatabase(likes))),
        unlikePost: (likeDocID)=> (dispatch(actions.unlikePostDatabase(likeDocID)))
    }
  }
  const mapStateToProps = state => {
    return {
      fullName: state.auth.fullName,
      photoURL: state.auth.photoURL,
      email: state.auth.email,
      uid: state.auth.uid,
      posts: state.data.posts ? state.data.posts : {}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputOptions);