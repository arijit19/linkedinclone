import {realtimeDB} from "../../../firebase/firebase";
import * as actionType from '../actionTypes';
import { startLoading, failedAuth, endLoading} from "./Auth";
import store from "../../../store/store";

export const saveUser = (user={}, uid)=> {
    return dispatch => {
        realtimeDB.ref(`users/${uid}`).push(user)
        .then(res=> {
            let toLoad =  store.getState().auth.loading
            toLoad && dispatch(endLoading())
        })
        .catch(err => {
            const errMsg = `[${err.catch}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
        })
    }
}
export const saveUserPost = (postID, uid)=> {
    return dispatch => {
        const post = [postID];
        realtimeDB.ref(`users/${uid}`).update({
            posts: post
        })
        .then(res=>{
            let toLoad = store.getState().auth.loading
            toLoad && dispatch(endLoading())
        })
        .catch(err => {
            const errMsg = `[${err.catch}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
        })
    }
}
export const fetchUserFullName = (fullName, photoURL)=> {
    return {
        type: actionType.FETCH_USER,
        fullName: fullName,
        photoURL: photoURL
    }
}
export const fetchUserFullNameDatabase = (uid)=>{
    return dispatch => {
        let toLoad = store.getState().data.loading || store.getState().auth.loading
        !toLoad &&  dispatch(startLoading());
        realtimeDB.ref(`users/${uid}`).once('value', snapshot => {
            if (snapshot && snapshot.exists()) {
                snapshot.forEach( data=> {
                    (data.val().fullName && data.val().photoURL) &&
                    dispatch(fetchUserFullName(data.val().fullName, data.val().photoURL));
                    toLoad =  store.getState().auth.loading
                    toLoad &&  dispatch(endLoading());
                });
            }
        })
        .catch(err => {
            const errMsg = `[${err.catch}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
            toLoad =  store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
        })
    }
}
