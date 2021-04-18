import {firestoreDB} from "../../../firebase/firebase";
import { failed} from "./Posts";


export const likeCommentDatabase = (like)=> {
    return dispatch => {

        const documentRef =firestoreDB.collection("Likes-Comment").doc()
        firestoreDB
            .collection('Likes-Comment')
            .doc(documentRef.id)
            .set(like)
            .then(() => {
                
            })
            .catch((err) => {
               
                dispatch(failed(err))
            });
    }
}