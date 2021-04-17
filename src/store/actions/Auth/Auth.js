import * as actionType from '../actionTypes';
import {firebase} from "../../../firebase/firebase";
import store from "../../../store/store";

export const signIn = ({uid, refreshToken, email, photoURL, fullName=""})=> {
    return {
        type: actionType.EMAIL_PASSWORD_AUTH_SIGNIN,
        uid: uid,
        refreshToken: refreshToken,
        email: email,
        photoURL: photoURL,
        fullName: fullName
    }
}

export const signOut = ()=> {
    return {
        type: actionType.EMAIL_PASSWORD_AUTH_SIGNOUT,
        uid: null,
        refreshToken: null,
        email: null,
        photoURL: null,
        fullName: null
    }
}

export const failedAuth = (error)=> {
    return {
        type: actionType.AUTH_ERROR,
        error: error
    }
}

export const startLoading = ()=> {
    return {
        type: actionType.AUTH_LOADING,
        loading: true
    }
}

export const endLoading = ()=> {
    return {
        type: actionType.AUTH_LOADING,
        loading: false
    }
}

export const signOutFirebase = ()=> {
    return dispatch => {
        let toLoad = store.getState().data.loading || store.getState().auth.loading
        !toLoad &&  dispatch(startLoading());
        firebase.auth().signOut()
        .then(()=>{
            toLoad = store.getState().data.loading || store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
            dispatch(signOut())
        })
        .catch(err=>{
            toLoad = store.getState().data.loading || store.getState().auth.loading
            toLoad && dispatch(endLoading());
            const errMsg = `[${err.catch}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
        })
    }
}

