import React , {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import styles from "./auth.module.css";
import {updateObject, checkValidation} from "../../shared/Utility";
import * as actions from "../../store/actions/index";

class Auth extends Component {
    state = {
        isRegistered: false,
        formIsValid: false,
        msg: "",
        controls : {
            fullName: {
                value: "",
                config: {
                    type: "text",
                    placeholder: "Full Name"
                },
                validation: {
                    required: false
                },
                valid: false,
            },
            email:{
                value: "",
                config: {
                    type: "email",
                    placeholder: "Enter your email"
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
            },
            password: {
                value: "",
                config: {
                    type: "password",
                    placeholder: "Enter you password"
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false,
            }
        }
    }

    signUphandler = ( )=> this.setState({isRegistered: true})
    signInhandler = ( )=> this.setState({isRegistered: false})

    inputChangehandler = (event, controlId)=> {
        let updatedControl = updateObject(this.state.controls,{
            [controlId]: updateObject(this.state.controls[controlId], {
                
                value: event.target.value,
                valid: checkValidation(this.state.controls[controlId].validation,event.target.value)
            })
        });
        
        let formIsValid = true;
        for (let controlIdentifier in updatedControl) {
            formIsValid = updatedControl[controlIdentifier].valid && formIsValid;
        }
        this.setState({controls: updatedControl,formIsValid: formIsValid })
    }
    formSubmitHandler = (e)=> {
        e.preventDefault();
        const emailID = 'email';
        const passwordID = 'password';
        const fullNameID = 'fullName';
        const fullName = this.state.controls[fullNameID].value;
        const email = this.state.controls[emailID].value;
        const password = this.state.controls[passwordID].value;
        if(this.state.isRegistered){
            this.props.emailPasswordSignIn(email,password);
        } else if(!this.state.isRegistered) {
            this.props.emailPasswordSignUp(email,password,fullName);
        }
    }
    render() {
        let inputElementsArray =[]
        for(let key in this.state.controls){
            let data = null
            if(this.state.isRegistered) {
                if(key !=="fullName") {
                    data= updateObject({},{
                        id: key,
                        value: this.state.controls[key].value,
                        config: this.state.controls[key].config
                    })
                }
            }
            else {
                data= updateObject({},{
                    id: key,
                    value: this.state.controls[key].value,
                    config: this.state.controls[key].config
                })
            }
            data && inputElementsArray.push(data);
        }
        let inputElements = inputElementsArray.map (element => {
            return <input 
                        key={element.id}
                        type={element.config.type}
                        placeholder={element.config.placeholder}
                        value = {element.config.value}
                        onChange = {(event)=> this.inputChangehandler(event,element.id)}/>
        })
        let msg = "";
        let btn = "";
        let switchReg = "";
        if(this.state.isRegistered) {
            msg = "Not a member? "
            btn= "SignIn"
            switchReg= "Register Now"
        }
        else {
            
            msg = "Already have a account "
            btn= "SignUp"
            switchReg= "Login"
        }
        
        let jsx = (<div className={styles.auth}>
                        <img 
                        src="https://www.freeiconspng.com/uploads/search-for-background-blog-post-book-page-forum-topic-theme-users-28.png"
                        width="350" 
                        alt="Search for: Background Blog post Book page Forum topic Theme Users"/>
                        <form>
                            {inputElements}
                            <button type="submit" onClick={this.formSubmitHandler}>{btn}</button>
                        </form>
                        <p>
                            {msg}
                            <span className={styles.auth__register} onClick={this.state.isRegistered ? this.signInhandler: this.signUphandler}>
                                {switchReg}
                            </span>
                        </p>
                    </div>)
        
        return(
            <Fragment>{jsx}</Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        emailPasswordSignIn: (email, password)=> (dispatch(actions.signInemailPassword(email, password))),
        emailPasswordSignUp: (email, password, fullName)=> (dispatch(actions.signUpemailPassword(email, password, fullName)))
    }
}



export default connect(null, mapDispatchToProps)(Auth);