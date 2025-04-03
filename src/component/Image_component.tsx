import React, { useState } from 'react'
import{View,StyleSheet,Text,Image, Button} from 'react-native'
function Image_component() {
  const [like,updateLike]=useState(0);
  return (
    <View>
        <Image style={styles.img} source={require('../../asset/gaming_console.png')}/> 
        <View style={styles.info}><Text style={styles.text}>Like count {like}</Text><Button title='Like' onPress={()=>{updateLike(like+1)}}/></View>
    </View>
  )
}
const styles=StyleSheet.create({
    box:{
        backgroundColor:'red',
        height:400,
        width:300,
        margin:10,
    },
    img:{
        height:300,
        width:300,
        resizeMode:'contain'
    },
    info:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
    },
    text:{
      color:'white',
    }
})

export default Image_component