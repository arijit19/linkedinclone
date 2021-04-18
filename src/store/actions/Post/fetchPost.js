import * as actionType from '../actionTypes';
import {firestoreDB} from "../../../firebase/firebase";

export const addPost = (post, postID) => {
    return {
        type: actionType.ADD_POST,
        post:post,
        postID:postID
    }
}
export const fetchPostBody = ()=> {
    return dispatch => {
        
        firestoreDB
            .collection('Posts')
            .onSnapshot(snapShot => {
                snapShot.docChanges().forEach( change => {
                    if (change.type === "added") {
                        
                        let post = {
                            ...change.doc.data()
                        }
                        dispatch(addPost(post,change.doc.id))
                        
                    }
                    if (change.type === "modified") {
                        
                    }
                    if (change.type === "removed") {
                       
                    }
        
                })
           })
    }
}

