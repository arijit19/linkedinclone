import * as actionType from '../actions/actionTypes';
import * as selectors from '../selectors/index';
import {updateObject} from '../../shared/Utility';


const initialState = {
    posts:null,
    comments:null,
    replys:null,
    postLikes:null,
    commentLikes:null,
    replyLikes:null,
    loading: false,
    error: null,
    isFetchData: false,
    isFetchPost: false,
    isFetchLike: false,
    isFetchComment: false,
    isFetchReply: false,
    isFetchLikeReply: false
};

const addPost = (state, action) => {
    const updatepost = {
        ...state.posts,
        [action.postID]: action.post
    }
    return updateObject(state,{posts: updatepost})
};

const inputPost = (state, action) => updateInputType(state,action);

const inputComment = (state, action) => updateInputType(state,action);

const updateInputType = (state, action) => {

    const updateStateType = {
        ...state[action.inputType],
        [action.inputTypeID]: action.inputTypeContent
    }
    return updateObject(state,{[action.inputType]: updateStateType});
}
const updatePost = (state, action)=> updateStateType(state, action);

const updateComment = (state, action)=> updateStateType(state, action);

const updateStateType = (state, action)=> {
    const stateTypeElement = state[action.stateType][action.stateTypeID];
    const updateStateType = updateObject(stateTypeElement,{[action.updateType]: {
        ...stateTypeElement[action.updateType],
        [action.stateUpdateTypeID]: action.updateTypeID
    }})
    const updateState = {
        ...state[action.stateType],
        [action.stateTypeID] : updateStateType
    }
    return updateObject(state,{[action.stateType]: updateState})
}

const errorHandle = (state, action) => ({
    ...state,
    error: action.error
});

const loadingHandler = (state, action)=> ({
    ...state,
    loading: action.loading
});

const addPostLike = (state, action) => {
    const updateLikes = {
        ...state.postLikes,
        [action.likeID]: action.like
    }
    return updateObject(state,{postLikes: updateLikes})
}

const removePostLike = (state, action) => {
    const updateLikes = selectors.filterObject(action.likeID, state.postLikes)
    return updateObject(state,{postLikes: updateLikes})
}

const addCommentLike = (state, action) => {
    const updateLikes = {
        ...state.commentLikes,
        [action.likeID]: action.like
    }
    return updateObject(state,{commentLikes: updateLikes})
}

const addReplyLike = (state, action) => {
    const updateLikes = {
        ...state.replyLikes,
        [action.likeID]: action.like
    }
    return updateObject(state,{replyLikes: updateLikes})
}

const removeReplyLike = (state, action) => {
    const updateLikes = selectors.filterObject(action.likeID, state.replyLikes)
    return updateObject(state,{replyLikes: updateLikes})
}

const removeCommentLike = (state, action) => {
    const updateLikes = selectors.filterObject(action.likeID, state.commentLikes)
    return updateObject(state,{commentLikes: updateLikes})
}

const fetchpostData = (state, action) => updateObject(state,{isFetchData: true});
const fetchpost = (state, action) => updateObject(state,{posts: action.posts, isFetchPost:true});
const addComment = (state, action) => {
    const updateComment = {
        ...state.comments,
        [action.commentID]: action.comment
    }
    return updateObject(state,{comments: updateComment})
}
const addReply = (state, action) => {
    const updateReply = {
        ...state.replys,
        [action.replyID]: action.reply
    }
    return updateObject(state,{replys: updateReply})
}
const fetchReply = (state, action) => updateObject(state,{replys: action.reply,isFetchReply:true});
const fetchLikeReply = (state, action) => updateObject(state,{replyLikes: action.postLikes,isFetchLikeReply:true});

const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case actionType.ADD_POST : return addPost(state, action); 
        case actionType.FETCH_POST: return fetchpost(state,action); 
        case actionType.POST_ERROR: return errorHandle(state,action);
        case actionType.POST_LOADING: return loadingHandler(state,action);
        case actionType.ADD_COMMENT: return addComment(state,action);
        case actionType.ADD_REPLY: return addReply(state,action);
        case actionType.POST_ADD_LIKE: return addPostLike(state,action);
        case actionType.POST_REMOVE_LIKE: return removePostLike(state,action);
        case actionType.COMMENT_ADD_LIKE: return addCommentLike(state,action);
        case actionType.COMMENT_REMOVE_LIKE: return removeCommentLike(state,action);
        case actionType.REPLY_ADD_LIKE: return addReplyLike(state,action);
        case actionType.REPLY_REMOVE_LIKE: return removeReplyLike(state,action);
        case actionType.FETCH_POST_DATA: return fetchpostData(state,action);
        case actionType.UPDATE_POST: return updatePost(state,action);
        case actionType.UPDATE_COMMENT: return updateComment(state,action);
        case actionType.INPUT_POST: return inputPost(state,action);
        case actionType.INPUT_COMMENT: return inputComment(state,action);
        case actionType.FETCH_REPLY_COMMENT: return fetchReply(state,action);
        case actionType.FETCH_LIKE_COMMENT: return fetchLikeReply(state,action);
        default: return state;
    }
}

export default reducer;