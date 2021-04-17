import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from "./createComment.module.css"
import * as actions from "../../store/actions/index";
import {updateObject, checkValidation} from "../../shared/Utility";

class CreateComment  extends Component {
    state = {
        value: "",
        config: {
            type: "any",
            placeholder: "Write a comment"
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
        const comment = {
            message: this.state.value,
            fullName: this.props.fullName,
            email: this.props.email,
            photoURL: this.props.photoURL,
            contentID: this.props.postID,
            uid: this.props.uid
        }
       
        this.props.commentPost(comment);
        this.setState({ value: "",valid: false})
    }

    render() {
        return (
            <div className={styles.commentOption}>
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
        commentPost: (comment)=> (dispatch(actions.commentPostDatabase(comment)))
    }
  }
  const mapStateToProps = state => {
    return {
      uid: state.auth.uid,
      fullName: state.auth.fullName,
      photoURL: state.auth.photoURL,
      email: state.auth.email
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);