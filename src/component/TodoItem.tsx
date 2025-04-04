import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Todo } from "../types";

interface TodoItemProps{
    todo:Todo,
    onDelete:()=>void,
    onEdit:(id:string,text:string)=>void,
    isCompletedTodo:()=>void,
}

const TodoItem: React.FC<TodoItemProps>=({todo,onDelete,onEdit,isCompletedTodo})=>{
    const[edit,setEdit]=useState(false);
    const[text,setText]=useState(todo.text)
    const editPress=()=>{
        setEdit(true);
    }
    const onSave=()=>{
        onEdit(todo.id,text);
        setEdit(false);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.todoText} onPress={isCompletedTodo}>
                {!edit&&<Text style={[styles.text , todo?.completed && styles.completedText]} >{todo.text}</Text>}
                {edit&& <TextInput style={styles.text} placeholder={text} value={text} onChangeText={setText}></TextInput>}
            </TouchableOpacity>
            {!edit && <View style={styles.btnContainer}>
                {
                !todo.completed && <TouchableOpacity style={styles.editBtn} onPress={editPress}>
                    <Text>Edit</Text>
                </TouchableOpacity>}
                <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>}
            {
                edit && <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.editBtn} onPress={onSave}>
                    <Text>Save</Text>
                    </TouchableOpacity>
                    </View>
            }

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