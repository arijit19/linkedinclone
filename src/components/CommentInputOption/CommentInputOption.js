import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from "./commentInputOption.module.css";
import * as actions from "../../store/actions/index";
import {updateObject, checkValidation} from "../../shared/Utility";

class CommentInputOption extends Component {
    state = {
        value: "",
        config: {
            type: "any",
            placeholder: "Write a reply"
        },
        validation: {
            required: true,
        },
        valid: false,
    }
    inputChangeHandler=(event)=> {
        const updateState = updateObject(this.state,{
                value: event.target.value,
                valid: checkValidation(this.state.validation,event.target.value)
        })
        this.setState(updateState)
    }
    commentLikeHandler = ()=> {
        if(this.props.clicked) {
            this.props.unlikePost(this.props.likeDocID)
        }
        else{
            const like = {
                uid: this.props.uid,
                fullName: this.props.fullName,
                photoURL: this.props.photoURL,
                postID: this.props.postID,
                contentID: this.props.commentID,
                email:this.props.email
            }
            this.props.likePost(like);
        }
    }
    
    submitPostHandler = (event)=>{
        event.preventDefault();
        const reply = {
            message: this.state.value,
            fullName: this.props.fullName,
            email: this.props.email,
            photoURL: this.props.photoURL,
            postID: this.props.postID,
            contentID: this.props.commentID,
            uid: this.props.uid
        }
       
        this.props.replyComment(reply);
        this.setState({ value: "",valid: false})
    }

    render() {
        let sty = styles.inputOption;
        if(this.props.title === "Like") {
            const like =  this.props.clicked ? styles.liked : styles.unlike
            sty = [styles.inputOption, like].join(' ');
        }
        let jsx = (
            <div className={sty} 
                onClick={this.commentLikeHandler}>
                <this.props.Icon styles={{color: this.props.color}}/>
                <h4>{this.props.title}</h4>
            </div>
        )

        if(this.props.title === "Comment") {
            jsx = (
                <div className={styles.commentOption}>
                    <form>
                        <this.props.Icon className={styles.icon} styles={{color: this.props.color}}/>
                        <input 
                        type={this.state.config.type} 
                        placeholder={this.state.config.placeholder} 
                        value={this.state.value}
                        onChange={(event)=> this.inputChangeHandler(event)}/>
                        <button type="submit" onClick={this.submitPostHandler}>Send</button>
                    </form>
                </div>
            )
        }
    return jsx;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        likePost: (like)=> (dispatch(actions.likeCommentDatabase(like))),
        unlikePost: (likeDocID)=> (dispatch(actions.unlikeCommentDatabase(likeDocID))),
        replyComment: (like)=> (dispatch(actions.replyCommentDatabase(like))),
    }
  }
  const mapStateToProps = state => {
    return {
      fullName: state.auth.fullName,
      photoURL: state.auth.photoURL,
      email: state.auth.email,
      uid: state.auth.uid,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputOption);