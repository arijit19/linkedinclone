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
                console.log("Document successfully written!");
            })
            .catch((err) => {
                console.error("Error writing document: ", err);
                dispatch(failed(err))
            });
    }
}