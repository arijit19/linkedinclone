import {firestoreDB} from "../../../firebase/firebase";

export const unlikePostDatabase = (likeDocID)=> {
    return async dispatch => {
        firestoreDB
        .collection('Likes-Post')
        .doc(likeDocID)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}