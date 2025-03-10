import React,{useState} from "react";
import { Text,View,Button,StyleSheet} from "react-native";

const Counter=()=>{
    const [count,updateCount]=useState(0);
    return (<View style={styles.container}>
        <Text style={styles.text}>your count is:{count}
        </Text>
        <Button title="Add one" onPress={()=>updateCount(count+1)}></Button>
    </View>)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:24,
        marginBottom:10,
    }
})
export default Counter;