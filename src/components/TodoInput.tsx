import React,{useRef} from 'react'

interface TodoInputProps{
todoAdd:(text:string)=>void
}

const TodoInput:React.FC<TodoInputProps>=props=>{
     
    const textInputRef=useRef<HTMLInputElement>(null)

    const onSubmitHandler=(event:React.FormEvent)=>{
         event.preventDefault();
         const enteredText=textInputRef.current!.value;
         props.todoAdd(enteredText)
    }
return <form onSubmit={onSubmitHandler}>
<input type="text" ref={textInputRef} />
<button type="submit">Add</button>
</form>
}

export default TodoInput