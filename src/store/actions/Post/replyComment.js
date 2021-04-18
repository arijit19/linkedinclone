import {firestoreDB} from "../../../firebase/firebase";
import { failed} from "./Posts";

export const replyCommentDatabase = (reply)=> {
    return dispatch => {
        const documentRef =firestoreDB.collection('Replies').doc()
        firestoreDB
            .collection('Replies')
            .doc(documentRef.id)
            .set(reply)
            .then(() => {
            })
            .catch((err) => {
                dispatch(failed(err))
            });
    }
}