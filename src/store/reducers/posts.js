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
};

const addPost = (state, action) => {
    const updatepost = {
        ...state.posts,
        [action.postID]: action.post
    }
    return updateObject(state,{posts: updatepost})
};


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
    const updateLikes = selectors.removeObject(action.likeID, state.postLikes)
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
    const updateLikes = selectors.removeObject(action.likeID, state.replyLikes)
    return updateObject(state,{replyLikes: updateLikes})
}

const removeCommentLike = (state, action) => {
    const updateLikes = selectors.removeObject(action.likeID, state.commentLikes)
    return updateObject(state,{commentLikes: updateLikes})
}

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

const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case actionType.ADD_POST : return addPost(state, action); 
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
        default: return state;
    }
}

export default reducer;