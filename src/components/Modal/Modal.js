import React, { Component,Fragment } from 'react';

import Backdrop from '../ModalBackdrop/ModalBackdrop';
import styles from "./modal.module.css";

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.disable !== this.props.disable || nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render () {
        console.log("Modal "+this.props.disable);
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={styles.modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className={styles.modal__posts}>
                        {this.props.children}
                    </div>
                    <div className={styles.modal__buttons}>
                        <button 
                        onClick={this.props.submitPost} 
                        className={[styles.modal__button , styles.Success].join(' ')}
                        disabled={!this.props.disable}>Post</button>
                        <button 
                        className={[styles.modal__button , styles.Cancle].join(' ')}
                        onClick={this.props.modalClosed}>Cancle</button>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

export default Modal;