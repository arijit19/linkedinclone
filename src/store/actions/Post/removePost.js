// import * as actionType from '../actionTypes';
// import {database} from "../../../firebase/firebase";
// import { startLoading, endLoading, failed} from "./Posts";


// export const removePost = (id)=> {
//     return {
//         type: actionType.REMOVE_POST,
//         id:id
//     }
// }

// export const removePostDatabase = (id,uid)=> {
//     return dispatch => {
//         // const uid = 1234;
//         dispatch(startLoading());
//         database.ref(`users/${uid}/expenses/${id}`).remove()
//         .then(res=> {
//             dispatch(removePost(id));
//             dispatch(endLoading());
//         })
//         .catch(err=> {
//             dispatch(endLoading());
//             dispatch(failed(err))
//         })
//     }
// }