import React, { Component, Fragment} from 'react';
import FlipMove from 'react-flip-move';
import {connect} from 'react-redux';

import Post from "../Post/Post";
import * as actions from "../../store/actions/index";
import * as selectors from "../../store/selectors/index";

class Posts extends Component {

    componentDidMount() {
      this.props.fetchPost();
      this.props.fetchPostLikes();
      this.props.fetchPostComments();
      this.props.fetchCommentLikes();
      this.props.fetchReplyDatabase();
      this.props.fetchReplyLikes();
    }

    render() {
    let postsElements = []
    for(let post in this.props.posts) {
      const postlikes= selectors.filterObject(post, this.props.likes);
      const postComments = selectors.filterObject(post,this.props.comments);
      postsElements.push(
        <Post 
            key={post}
            id={post}
            name={this.props.posts[post].fullName}
            description={this.props.posts[post].email}
            message={this.props.posts[post].message.text}
            file = {this.props.posts[post].file}
            likes= {postlikes}
            comments= {postComments}
            uid={this.props.uid}
            photoUrl={this.props.posts[post].photoURL}/>
      )
    }
    return <Fragment><FlipMove disableAllAnimations={false}>{postsElements}</FlipMove></Fragment>
    }
}

const mapStateToProps = state => {
    return {
      posts: state.data.posts ? state.data.posts : {},
      comments: state.data.comments ? state.data.comments: {},
      likes: state.data.postLikes ? state.data.postLikes : {},
      uid:state.auth.uid
    }
  }
const mapDispatchToProps = dispatch => {
  return {
    fetchPost: ()=> (dispatch(actions.fetchPostBody())),
    fetchPostLikes: ()=> (dispatch(actions.fetchPostLikes())),
    fetchPostComments: ()=>(dispatch(actions.fetchPostComments())),
    fetchCommentLikes: ()=> (dispatch(actions.fetchCommentLikes())),
    fetchReplyDatabase: ()=> (dispatch(actions.fetchReplyDatabase())),
    fetchReplyLikes: ()=> (dispatch(actions.fetchReplyLikes()))
  }
}
  export default connect(mapStateToProps,mapDispatchToProps)(Posts);