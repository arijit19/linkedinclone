import {firestoreDB, storageRef} from "../../../firebase/firebase";
import { updateObject } from '../../../shared/Utility';
import {failed} from "./Posts";


export const addPostDatabase = (post)=> {
    return dispatch => {
        const documentRef =firestoreDB.collection("Posts").doc()
        firestoreDB
            .collection('Posts')
            .doc(documentRef.id)
            .set(post)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((err) => {
                console.error("Error writing document: ", err);
                dispatch(failed(err))
            });
    }
}

export const addPostURLDatabase = (post, file)=> {
    return dispatch => {
        const fileType = file.type.toString().split('/');
        const fileName = file.value.name;
        const uploadTask = storageRef.child(`${fileType[0]}/${fileName}`).put(file.value);
        uploadTask.on('state_changed', (snapshot)=>{}, (error)=> {
            dispatch(failed(error));
          }, () =>{
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              let fileID = 'file';
                const updatePostURL = updateObject(post,{
                    [fileID]: updateObject(post[fileID],{
                        URLValue: downloadURL,
                        type: file.type
                    })
                })
                const documentRef =firestoreDB.collection("Posts").doc()
                firestoreDB
                    .collection('Posts')
                    .doc(documentRef.id)
                    .set(updatePostURL)
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((err) => {
                        console.error("Error writing document: ", err);
                        dispatch(failed(err))
                    });
            });
          });
    }
}