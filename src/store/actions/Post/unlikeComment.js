import {firestoreDB} from "../../../firebase/firebase";


export const unlikeCommentDatabase = (likeDocID)=> {
    return async dispatch => {
        firestoreDB
        .collection('Likes-Comment')
        .doc(likeDocID)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}