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
                        let comment = {
                            ...change.doc.data()
                        }
                        dispatch(addComment(comment,change.doc.id));
                    }
                    if (change.type === "modified") {
                       
                    }
                    if (change.type === "removed") {
                    }
                })
           })
    }
}


