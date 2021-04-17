import * as actionType from '../actionTypes';
import {firestoreDB} from "../../../firebase/firebase";

export const addComment = (comment, commentID) => {
    return {
        type: actionType.ADD_COMMENT,
        comment:comment,
        commentID:commentID
    }
}

export const fetchPostComments = ()=> {
    return dispatch => {
        firestoreDB
            .collection('Comments')
            .onSnapshot(snapShot => {
                snapShot.docChanges().forEach( change => {
                    if (change.type === "added") {
                        // console.log("Added city: ", change.doc.data());
                        //snapShot.docs.map( doc => likes[doc.id] = doc.data())
                        let comment = {
                            ...change.doc.data()
                        }
                        dispatch(addComment(comment,change.doc.id));
                    }
                    if (change.type === "modified") {
                        // console.log("Modified city: ", change.doc.data());
                        // snapShot.docs.map( doc => likes[doc.id] = doc.data())
                    }
                    if (change.type === "removed") {
                        // dispatch(removeLikes(change.doc.id));
                    }
        
                })
           })
    }
}


