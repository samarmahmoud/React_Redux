
const style={
    headerStyle:{
        backgroundColor:'#4a73ab',
        paddingTop:20,
        height:70,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 5},
        shadowOpacity:0.3,
        elevation: 3
    },
    headerTextStyle:{
        fontSize:20,
        color:'#fff'

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    ContainerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor: '#000000',
        shadowOffset: {width: 0,height: 5},
        shadowOpacity:0.2,
        shadowRadius:2,
        elevation: 3,
        marginLeft:5,
        marginRight:5,
        marginTop:10,

    },
    ContainerCardItemStyle:{
        
        padding:3,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative',
    },
    imageSytle:{
        width:70,
        height:70
      },
      TextStyle:{
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#4a73ab',
        marginBottom: 10,
        borderRadius:3,
        textAlign:'center'
  
      },
      ButtonStyle:{
          flex:1,
          alignSelf:'stretch',
          backgroundColor:'#4a73ab',
          borderRadius:5,
          borderWidth:1,
          borderColor:'#4a73ab',
          marginLeft:5,
          marginRight:5,
          

      },
      ButtonTextStyle:{
        alignSelf:'center',
        paddingTop:10,
        paddingBottom:10, 
        fontSize:15,     
        color:'#fff', 

    }

    
}

export  {style};