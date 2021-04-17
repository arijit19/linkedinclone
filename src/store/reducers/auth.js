import * as actionType from '../actions/actionTypes';

const initalState = {
    isAuth: false,
    loading: false,
    error: null,
    uid: null,
    refreshToken: null,
    email: null,
    photoURL: null,
    fullName: null
}

const emailPasswordSignInhandle = (state, action)=> ({
    ...state,
    isAuth: true,
    error: null,
    refreshToken: action.refreshToken,
    uid: action.uid,
    email: action.email,
    photoURL: action.photoURL,
    fullName: action.fullName
})

const emailPasswordSignOuthandle = (state, action)=> ({
    ...state,
    isAuth: false,
    error: null,
    refreshToken: null,
    uid: null,
    email: null,
    photoURL: null,
    fullName: null
})

const authLoading = (state,action)=> ({
    ...state,
    loading: action.loading
})

const authError = (state,action)=> ({
    ...state,
    error: action.error
})

const fetchUserhandler = (state,action)=> ({
    ...state,
    fullName: action.fullName,
    photoURL: action.photoURL
})

const reducer = (state = initalState,action)=> {
    switch(action.type){
        case actionType.EMAIL_PASSWORD_AUTH_SIGNIN:  return emailPasswordSignInhandle(state,action);
        case actionType.EMAIL_PASSWORD_AUTH_SIGNOUT: return emailPasswordSignOuthandle(state,action);
        case actionType.AUTH_LOADING: return authLoading(state,action);
        case actionType.AUTH_ERROR: return authError(state,action);
        case actionType.FETCH_USER : return fetchUserhandler(state,action);
        default: return state;
    }

}

export default reducer;