import {firestoreDB} from "../../../firebase/firebase";


export const unlikeCommentDatabase = (likeDocID)=> {
    return async dispatch => {
        firestoreDB
        .collection('Likes-Comment')
        .doc(likeDocID)
        .delete()
        .then(() => {
        }).catch((error) => {
        });
    }
}