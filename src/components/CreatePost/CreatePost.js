import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateIcon from "@material-ui/icons/Create";

import styles from "./createPost.module.css";
import * as actions from "../../store/actions/index";
import {updateObject, checkValidation} from "../../shared/Utility";

class CreatePost extends Component {
    state = {
        value: "",
        config: {
            type: "text",
            placeholder: "Write a post"
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
    submitPostHandler = (event)=>{
        event.preventDefault();
        const post = {
            fullName: this.props.fullName,
            email: this.props.email,
            photoURL: this.props.photoURL,
            uid:this.props.uid,
            message: {
                text: this.state.value,
            }
        }
        this.props.addPost(post);
        const updateState = updateObject(this.state,{
            value: "",
            valid: false
        })
        this.setState(updateState)
    }
    render() {
        return (
            <div className={styles.input}>
                <CreateIcon/>
                <form>
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
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: (post)=> (dispatch(actions.addPostDatabase(post)))
    }
  }
  const mapStateToProps = state => {
    return {
      posts: state.data.posts,
      uid: state.auth.uid,
      fullName: state.auth.fullName,
      photoURL: state.auth.photoURL,
      email: state.auth.email
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
// export default (CreatePost);