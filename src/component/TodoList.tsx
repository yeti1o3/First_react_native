import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todoList:Todo[],
    onDeleteTodo:(id:string)=>void,
    onEditTodo:(id:string,text:string)=>void,
    isCompletedTodo:(id:string)=>void;
}

const TodoList: React.FC<TodoListProps>=({todoList,onDeleteTodo,onEditTodo,isCompletedTodo})=>{
    return (
        <ScrollView style={styles.container}>
            {
            todoList.map(todo=>
            <TodoItem key={todo.id}
            todo={todo}
            onDelete={()=>onDeleteTodo(todo.id)}
            onEdit={(id:string,text:string)=>onEditTodo(id,text)}
            isCompletedTodo={()=>isCompletedTodo(todo.id)}
            />
            )
            }
        </ScrollView>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})
export default TodoList;