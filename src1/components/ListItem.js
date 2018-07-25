import React ,{Component} from 'react';
import {Text} from 'react-native';
import {CardItems} from './common';

class ListItem extends Component{
    render(){
        return(
         <CardItems>
             <Text>{this.props.item.title}</Text>
             {/* <Text>{this.props.item.description}</Text> */}
        </CardItems>
        );

    }
}

export default ListItem ;