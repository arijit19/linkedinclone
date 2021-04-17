import {firebase} from "../../../firebase/firebase";
import { signIn,startLoading , endLoading, failedAuth} from "./Auth";
import {saveUser} from "./User";
import store from "../../../store/store";

export const signInemailPassword = (email, password) => {
    return dispatch => {
        let toLoad = store.getState().data.loading || store.getState().auth.loading
        !toLoad &&  dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(data=>{
            const usr = {
                uid: data.user.uid, 
                refreshToken: data.user.refreshToken, 
                email: email, 
                photoURL: data.user.photoURL, 
                fullName: null
            }
            dispatch(signIn(usr));
            toLoad = store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
        })
        .catch(err => {
            toLoad = store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
            const errMsg = `[${err.catch}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
        })
    }
}

export const signUpemailPassword = (email, password, fullName) => {
    return dispatch => {
        let toLoad = store.getState().data.loading || store.getState().auth.loading
        !toLoad &&  dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(data=>{
            const usr = {
                uid: data.user.uid, 
                refreshToken: data.user.refreshToken, 
                email: email, 
                photoURL: data.user.refreshToken, 
                fullName: fullName
            }
            dispatch(signIn(usr));
            dispatch(saveUser({
                email: email, 
                photoURL: data.user.refreshToken, 
                fullName: fullName
            }, data.user.uid))
            
        })
        .catch(err => {
            toLoad = store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
            const errMsg = `[${err.code}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
        })
    }
}


