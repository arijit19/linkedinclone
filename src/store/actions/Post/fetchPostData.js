import * as actionType from '../actionTypes';
import store from "../../../store/store";
import { startLoading, endLoading, failed} from "./Posts";
import {fetchPostBody} from "./fetchPost";
import {fetchPostComments} from "./fetchComments";
import {fetchPostLikes} from "./fetchPostLikes";
import {fetchReplyDatabase} from "./fetchReplyComment";
// import {fetchLikesReply} from "./fetchLikeComment";

export const fetchData = () => {
    return {
        type: actionType.FETCH_POST_DATA
    }
}

export const fetchDataComplete = () => {
    return {
        type: actionType.FETCH_POST_DATA_COMPLETE
    }
}

export const fetchPostDatabase = ()=> {
    return dispatch => {
        let toLoad = store.getState().data.loading || store.getState().auth.loading
        !toLoad &&  dispatch(startLoading());
        dispatch(fetchData());
        const p1 = Promise.resolve(dispatch(fetchPostBody()));
        const p2 = Promise.resolve(dispatch(fetchPostComments()));
        const p3 = Promise.resolve(dispatch(fetchPostLikes()));
        const p4 = Promise.resolve(dispatch(fetchReplyDatabase()));
        // const p5 = Promise.resolve(dispatch(fetchLikesReply()));
        return Promise.all([p1,p2,p3,p4])
        .then((value)=> {
            toLoad = store.getState().data.loading
            toLoad &&  dispatch(endLoading());
        })
        .catch(err=> {
            toLoad = store.getState().data.loading
            toLoad &&  dispatch(endLoading());
            dispatch(failed(err))
        })
    }
}