import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';


import * as actions from "../../store/actions/index";
import {updateObject, checkValidation} from "../../shared/Utility";
import styles from "./createPostFileOption.module.css";
import Modal from '../Modal/Modal';

class CreatePostFileOption extends Component {
    state = {
        showModal: false,
        message: {
            value: "",
            config: {
                type: "text",
                placeholder: "Write a post"
            },
            validation: {
                required: true,
            },
            valid: false
        },
        file:{
            value: null,
            URLValue: null,
            valid: false,
            type: null
        }
        
    }

    fileInputChangeHandler = (event)=> {
        const updateFile = updateObject(this.state.file,{
            value: event.target.files[0],
            URLValue: URL.createObjectURL(event.target.files[0]),
            type: event.target.files[0].type,
            valid: checkValidation(event.target.files[0], this.props.validation)
        })
        updateFile.valid && this.setState({ file: updateFile});
    }
    componentDidUpdate(prevProps, prevState) {
        if((this.state.file.value)&&(this.state.file.value !== prevState.file.value)) {
            this.setState({showModal: true})
        }
    }

    submitPostHandler = ()=> {
        const post = {
            fullName: this.props.fullName,
            email: this.props.email,
            photoURL: this.props.photoURL,
            uid:this.props.uid,
            message: {
                text: this.state.message.value,
            }
        }
        const file = {
            value: this.state.file.value,
            URLValue: this.state.file.URLValue,
            type: this.state.file.type
        }
        this.state.message.valid && this.state.file.valid && this.props.addPost(post,file);
        this.modalClosedHandler();
    }

    textInputChangeHandler=(event)=> {
        const updateMessage = updateObject(this.state.message,{
                value: event.target.value,
                valid: checkValidation(this.state.message.validation,event.target.value)
        })
        //updateMessage.valid &&
         this.setState({message: updateMessage})
    }

    modalClosedHandler = ()=> {
        let fileID = 'file';
        let messageID = 'message';
        let updateState = updateObject(this.state,{
            showModal: false,
            [fileID]: updateObject(this.state[fileID], {
                value: null,
                URLValue: null,
                type: null,
                valid: false
            }),
            [messageID]: updateObject(this.state[messageID],{
                value: "",
                valid: false
            })
        });

        this.setState(updateState);
    }

    render(){
        let jsx = (
            <div className={styles.fileOption} onClick={()=>this.InputFile.click()}>
                <input 
                type={this.props.type} 
                style={{display: 'none'}}
                onChange={this.fileInputChangeHandler}
                accept={this.props.accepts}
                ref={InputFile => this.InputFile = InputFile}/> 
                <this.props.Icon styles={{color: this.props.color}}/>
                <h4>{this.props.title}</h4>
            </div>)

        if(this.state.showModal) {
            jsx = (
                <Modal 
                    show={this.state.showModal} 
                    disable = {this.state.message.valid && this.state.file.valid}
                    submitPost = {this.submitPostHandler}
                    modalClosed={this.modalClosedHandler}>
                    <input 
                    type={this.state.message.config.type} 
                    placeholder={this.state.message.config.placeholder}
                    value={this.state.message.value}
                    onChange={this.textInputChangeHandler}/>
                    {this.props.validation.isImage && 
                    <img src={this.state.file.URLValue} alt="Upload" 
                        type={this.state.file.type} style={{height: "400px"}}/>}
                    {this.props.validation.isVideo && 
                    <video style={{height: "400px"}}>
                        <source src={this.state.file.URLValue} type={this.state.file.type}/>
                    </video>}
                </Modal>
            )
        }
        
        return (
           <Fragment>{jsx}</Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPost: (post, file)=> (dispatch(actions.addPostURLDatabase(post,file)))
    }
  }
  const mapStateToProps = state => {
    return {
      fullName: state.auth.fullName,
      photoURL: state.auth.photoURL,
      email: state.auth.email,
      uid: state.auth.uid
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CreatePostFileOption);