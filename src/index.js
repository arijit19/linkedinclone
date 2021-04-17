import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import './firebase/firebase';

import {firebase } from './firebase/firebase';
import store from './store/store';
import * as actions from "./store/actions/index";

firebase.auth().onAuthStateChanged( async (user) => {
  if (user) {
    const auth = store.getState().auth.isAuth;
    if(!auth) {
      await store.dispatch(actions.fetchUserFullNameDatabase(user.uid));
      const usr = {
        uid: user.uid, 
        refreshToken: user.refreshToken, 
        email: user.email, 
        photoURL: user.photoURL, 
        fullName: store.getState().auth.fullName
        }
        await store.dispatch(actions.signIn(usr))
    }
  } else {
    // No user is signed in.
    store.dispatch(actions.signOut());
  }
});

console.log(process.env.REACT_APP_DB_URL);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
