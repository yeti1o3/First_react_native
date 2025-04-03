import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../types";

interface TodoItemProps{
    todo:Todo,
}

const TodoItem: React.FC<TodoItemProps>=({todo})=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.todoText}>
                <Text style={[styles.text , todo?.completed && styles.completedText]}>{todo.text}</Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.editBtn}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    },
    todoText:{
        flex:1,
        
    },
    text:{
        fontSize:18, 
        color:'white',
        fontWeight:'bold'
    },
    completedText:{
        textDecorationLine:'line-through',
        color:'black'
    },
    btnContainer:{
        flexDirection:'row',
    },
    editBtn:{
        backgroundColor:'#007aff',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        marginRight:5,
    },
    deleteBtn:{
        backgroundColor:'#ff3b30',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
    },
    btnText:{
        color:'white',
        fontSize:15,
    }
})
export default TodoItem;