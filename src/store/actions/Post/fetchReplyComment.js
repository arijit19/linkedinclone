import * as actionType from '../actionTypes';
import {firestoreDB} from "../../../firebase/firebase";

export const addReply = (reply, replyID) => {
    return {
        type: actionType.ADD_REPLY,
        reply:reply,
        replyID:replyID
    }
}

export const fetchReplyDatabase = ()=> {
    return dispatch => {
        firestoreDB
            .collection('Replies')
            .onSnapshot(snapShot => {
                snapShot.docChanges().forEach( change => {
                    if (change.type === "added") {
                        
                        let comment = {
                            ...change.doc.data()
                        }
                        dispatch(addReply(comment,change.doc.id));
                    }
                    if (change.type === "modified") {
                        
                    }
                    if (change.type === "removed") {

                    }
        
                })
           })
    }
}


