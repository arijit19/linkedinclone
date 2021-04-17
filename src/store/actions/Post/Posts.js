import * as actionType from '../actionTypes';

export const startLoading = ()=> {
    return {
        type: actionType.POST_LOADING,
        loading: true
    }
}
export const endLoading = ()=> {
    return {
        type: actionType.POST_LOADING,
        loading: false
    }
}
export const failed = (err)=> {
    return {
        type: actionType.POST_ERROR,
        error: err
    }
}