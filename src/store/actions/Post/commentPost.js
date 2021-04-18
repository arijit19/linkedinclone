import {firestoreDB} from "../../../firebase/firebase";
import { failed} from "./Posts";

export const commentPostDatabase = (comment)=> {
    return dispatch => {
        const documentRef =firestoreDB.collection('Comments').doc()
        firestoreDB
            .collection('Comments')
            .doc(documentRef.id)
            .set(comment)
            .then(() => {
            })
            .catch((err) => {
                dispatch(failed(err))
            });
    }
}