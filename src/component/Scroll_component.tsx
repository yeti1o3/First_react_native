import React from 'react'
import{View,ScrollView,StyleSheet,Text,Image, ScrollViewComponent} from 'react-native'
import Image_component from './Image_component'
const Scroll_component = () => {
  return (
    <ScrollView style={styles.ScrollViewComponent}>
    <View>
        <Text style={styles.text}>Gaming Console</Text>
        <Image_component/>
        <Image_component/>
        <Image_component/>
    </View>
    </ScrollView>
  
  )
}
const styles=StyleSheet.create({
    text:{
        marginTop:30,
        color:'white',
        fontSize:30,
        fontWeight:700
    },
    ScrollViewComponent:{
        padding:20,
    }
})

export default Scroll_component;