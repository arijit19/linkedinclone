import {firestoreDB} from "../../../firebase/firebase";

export const unlikePostDatabase = (likeDocID)=> {
    return async dispatch => {
        firestoreDB
        .collection('Likes-Post')
        .doc(likeDocID)
        .delete()
        .then(() => {
        }).catch((error) => {
        });
    }
}