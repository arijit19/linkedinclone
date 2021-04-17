import {firestoreDB} from "../../../firebase/firebase";

export const unlikeReplyDatabase = (likeDocID)=> {
    return async dispatch => {
        firestoreDB
        .collection('Likes-Reply')
        .doc(likeDocID)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}