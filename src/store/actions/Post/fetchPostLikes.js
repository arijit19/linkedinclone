import * as actionType from '../actionTypes';
import {firestoreDB} from "../../../firebase/firebase";


export const addLikes = (like, likeID) => {
    return {
        type: actionType.POST_ADD_LIKE,
        like:like,
        likeID:likeID
    }
}

export const removeLikes = (likeID) => {
    return {
        type: actionType.POST_REMOVE_LIKE,
        likeID:likeID
    }
}

export const fetchPostLikes = ()=> {
    return dispatch => {
        firestoreDB
            .collection('Likes-Post')
            .onSnapshot(snapShot => {
                snapShot.docChanges().forEach( change => {
                    if (change.type === "added") {
                        
                        
                        let like = {
                            ...change.doc.data()
                        }
                        dispatch(addLikes(like,change.doc.id));
                    }
                    if (change.type === "modified") {
                        
                        
                    }
                    if (change.type === "removed") {
                        dispatch(removeLikes(change.doc.id));
                    }
        
                })
           })
    }
}


