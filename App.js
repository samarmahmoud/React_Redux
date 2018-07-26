import React from 'react';
import {View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers'
import {Header} from './src/components/common';
import Loginform from './src/components/Loginform';


export default class App extends React.Component {
  
    
  render() {
    return (
     <Provider store={createStore(reducers)}>
      <View>
         <Header headerTitle='Log in'/>
         
         <Loginform/>
  
      </View>
      
      </Provider>
    
    ); 
  }
}


 