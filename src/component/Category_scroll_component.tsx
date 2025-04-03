import React from 'react'
import{ScrollView,View,Text,StyleSheet} from 'react-native'
function Category_scroll_component() {
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.Category_scroll_view}>
        <View >
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
            <Text style={styles.text}>Gaming</Text>
        </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    Category_scroll_view:{
        height:200,
        width:200,
    },
    text:{
        color:'white',
        fontSize:30,
    }
})

export default Category_scroll_component