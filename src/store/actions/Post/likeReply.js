import {firestoreDB} from "../../../firebase/firebase";
import { failed} from "./Posts";


export const likeReplyDatabase = (like)=> {
    return dispatch => {
        const documentRef =firestoreDB.collection("Likes-Reply").doc()
        firestoreDB
            .collection('Likes-Reply')
            .doc(documentRef.id)
            .set(like)
            .then(() => {
                
            })
            .catch((err) => {
                dispatch(failed(err))
            });
    }
}