import React from 'react';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends React.Component {
  
    componentWillMount()
    {
      const config = {
        apiKey: "AIzaSyCFaFSqP8gkuXC77xx9-LUjqUhzJRjhIfM",
        authDomain: "todo-26edb.firebaseapp.com",
        databaseURL: "https://todo-26edb.firebaseio.com",
        projectId: "todo-26edb",
        storageBucket: "todo-26edb.appspot.com",
        messagingSenderId: "676277778543"
      };
      firebase.initializeApp(config);
    }
  render() {
    return (
     <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
     
      <Router/>
      </Provider>
    
    ); 
  }
}


 