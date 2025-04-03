import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './src/component/TodoInput';
import TodoList from './src/component/TodoList';
import { Todo } from './src/types';


function App(): React.JSX.Element {
  const [todoList,setTodoList]=useState<Todo[]>([]);

  const addTodo=(text:string)=>{
    setTodoList([...todoList,{
      id:Date.now().toString(),
      text,
      completed:false
    }]) 
  }
  console.log(todoList);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>    
      <TodoInput onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:30
  },
  headerText:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    textAlign:'center',  
  }
})


export default App;
