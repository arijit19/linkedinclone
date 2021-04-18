import {firestoreDB} from "../../../firebase/firebase";

export const unlikeReplyDatabase = (likeDocID)=> {
    return async dispatch => {
        firestoreDB
        .collection('Likes-Reply')
        .doc(likeDocID)
        .delete()
        .then(() => {
        }).catch((error) => {
        });
    }
}