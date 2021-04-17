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
                console.log("Document successfully written!");
            })
            .catch((err) => {
                console.error("Error writing document: ", err);
                dispatch(failed(err))
            });
    }
}