import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

interface TodoInputProps {
    onAddTodo:(text:string)=>void
}

const TodoInput:React.FC <TodoInputProps> =({onAddTodo})=>{
    const [text,setText]=useState('');
    const handleAddTodo=()=>{
        if(text.trim()){
            onAddTodo(text.trim())//remove leading and trailing white space
            setText('');
        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Add a new Todo....."
            />
            <TouchableOpacity style={styles.addTodoBtn}
                onPress={handleAddTodo}
                >
                <Text style={styles.addTodoBtnText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20
    },
    input:{
        flex:1,
        borderWidth:1,
        borderColor:'#cccccc',
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:10 
    },
    addTodoBtn:{
        backgroundColor:'#007aff',
        paddingHorizontal:15,
        paddingVertical:5,
        justifyContent:'center',
        alignItems:'center'
    },
    addTodoBtnText:{
        color:'#fff',
        fontWeight:'bold',
    }
})
export default TodoInput;