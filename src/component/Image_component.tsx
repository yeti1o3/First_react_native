import React from 'react'
import{View,StyleSheet,Text,Image, Button} from 'react-native'
function Image_component() {
  return (
    <View>
        <Image style={styles.img} source={require('../../asset/gaming_console.png')}/> 
        <Button title='Like'/>
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
})

export default Image_component