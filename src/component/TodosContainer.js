import React, { useState } from 'react'

function TodoList(){
    
    const [ todos, setTodos ] = useState([]) // 할 일을 의미하는 배열

    const [ todo, setTodo ] = useState("") // input에 써져있는 내용
    const handleSubmit = (event) => {
        event.preventDefault();
            setTodos([...todos, todo])
            setTodo("");
        
    }
    const sort = () => {
        let copy = [...todos];
        console.log(copy,"정렬")
        copy.sort();
        setTodos(copy);
    }

    const onKeyPress = (e) => {
        console.log(e.key)
        if (e.key == "Enter"){
            handleSubmit(e);
       }
        
    }

    return(
        <>
        <header>
            해야 할 업무 ({todos.length})
        </header>
            <input type="text" placeholder="업무내용을 적어주세요"
            value={todo} 
            onChange={e=>setTodo(e.target.value)}
            onKeyDown={onKeyPress} />
            <button onClick={handleSubmit}>Add To Do</button>
            <br></br>
            <button onClick = {sort} type='list'>정렬</button>
        <ul>
        <br></br>
        <hr></hr>
            {todos.map((todo, index) => {
                return <li key={index}>{todo}</li>
            })}
        </ul>    
    </>
    );
}
    
    
export default TodoList;
