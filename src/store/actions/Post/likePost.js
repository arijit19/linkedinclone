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
                
            })
            .catch((err) => {
                
                dispatch(failed(err))
            });
    }
}