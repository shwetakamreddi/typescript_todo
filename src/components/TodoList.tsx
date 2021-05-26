import React from 'react'

interface TodosProps{
    items:{id:string,text:string}[];
    todoDelete:(id:string)=>void;
};
const TodoList:React.FC<TodosProps>=(props)=>{
  
return <ul>
    {
        props.items.map((todo=> <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.todoDelete.bind(null,todo.id)}>Delete</button>
            </li>
    ))
    }
</ul>
}

export default TodoList