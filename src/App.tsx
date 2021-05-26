import React,{useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList"


const App :React.FC=()=> {
  const [todos,setTodos]=useState<{id:string;text:string}[]>([]);
  const todoAddHandler=(text:string)=>{
       setTodos([...todos,{id:Math.random().toString(),text:text}]);
  }
  const todoDeleteHandler=(id:string)=>{
    let tempTodos=[...todos]
    tempTodos=tempTodos.filter(todo=>todo.id!==id)
    setTodos(tempTodos)
  }
  return (
    <div className="App">
        <TodoInput todoAdd={todoAddHandler}/>
        <TodoList items={todos} todoDelete={todoDeleteHandler}/>
    </div>
  );
}

export default App;
