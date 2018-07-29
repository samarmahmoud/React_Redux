import React from 'react';
import {Text,Image,View ,ScrollView,TouchableOpacity,Linking} from 'react-native';
import axios from 'axios';
import {Card , CardItems,style}from './common';

export default class HomeScreen extends React.Component{
   
    state ={todoTask:[]};
    constructor(props)
    {
        super(props);
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response=>this.setState({todoTask:response.data}));
    }
    renderList()
    {
       return(this.state.todoTask.map(todos=><Card key={todos.id} >
       <TouchableOpacity >
       <CardItems>
         <View>
           <Image  style={style.imageSytle}
                   source={{uri:'https://cdn3.iconfinder.com/data/icons/business-office/256/To-do_List-512.png'}}
            />
         </View>
         <View>
           <Text numberOfLines={3}>{todos.title }</Text>
        </View>
       </CardItems>
       </TouchableOpacity>
       </Card>)
       ) ;
    }
    render(){
        return( 
            <ScrollView>
                 {this.renderList()}
            </ScrollView>
           
        );
    }
}