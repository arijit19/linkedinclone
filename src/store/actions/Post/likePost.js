import {firestoreDB} from "../../../firebase/firebase";
import { failed} from "./Posts";


export const likePostDatabase = (like)=> {
    return dispatch => {
        const documentRef =firestoreDB.collection("Likes-Post").doc()
        firestoreDB
            .collection('Likes-Post')
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