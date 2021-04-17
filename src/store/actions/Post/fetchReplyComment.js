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
                        // console.log("Added city: ", change.doc.data());
                        //snapShot.docs.map( doc => likes[doc.id] = doc.data())
                        let comment = {
                            ...change.doc.data()
                        }
                        dispatch(addReply(comment,change.doc.id));
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


