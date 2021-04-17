import React, {Component} from 'react';
import {connect} from 'react-redux';


import styles from "./postInputOptions.module.css";
import * as actions from "../../store/actions/index";
import { PostInputData } from '../../data/PostInputData';
import PostInputOption from '../PostInputOption/PostInputOption';


class PostInputOptions extends Component {
    
    postLikeHandler = ()=> {
        const like = {
            uid: this.props.uid,
            fullName: this.props.fullName,
            photoURL: this.props.photoURL,
            contentID: this.props.postID,
            email:this.props.email
        }
        this.props.likePost(like);
    }
    clickHandler = (title)=> {
        switch (title) {
            case "Like":
                this.props.isLiked ? this.props.unlikePost(this.props.likeDocID)
                : this.postLikeHandler();
                break;
            case "Comment":
                    this.props.commentClicked();
                break;
            case "Send":
            
            break;
            case "Share":
        
            break;
                
        
            default:
                break;
        }
    }

    render() {
        
        return (
            <div className={styles.inputOptions}>
                {PostInputData.map( (element,index)=> (
                    <PostInputOption 
                        key={index}
                        title={element.title}
                        Icon={element.Icon}
                        uid={this.props.uid}
                        onClicked={()=>this.clickHandler(element.title)}
                        clicked= {this.props.isLiked}
                        color={element.color}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostInputOptions);