import React from 'react';
import {View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers'
import {Header} from './src/components/common'
import LibraryList from './src/components/LibraryList'


export default class App extends React.Component {
  render() {
    return (
     <Provider store={createStore(reducers)}>
      <View>
         <Header headerTitle='Redux start'/>
          <LibraryList/> 
      </View>
      </Provider>
    
    );
  }
}


 