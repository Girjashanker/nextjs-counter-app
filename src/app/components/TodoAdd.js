'use client';
import { useState } from "react"

function nextId() {
    let id = 3;
    return function(){
        return id++;
    }
}
const uniqueId = nextId();
export default function TodoAdd() {

    const [newTodo, setNewTodo] = useState("")
    const [Todo, setTodo] = useState([
        {
            "id" : 1,
            "Text" : "Todo 1"

        },
        {
            "id" : 2,
            "Text" : "Todo 2"
        }
    ])

    const addtodohandler = ()=>{
        console.log("hello world");
        let id = uniqueId();
        const data = {
            id,
            "Text" : newTodo
        }
        setTodo([...Todo, data])
        setNewTodo("")
    }
    return(
        <div>
            <input type={"text"} value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
            <button type={"button"} onClick={addtodohandler}> Add </button>
            {Todo.map((todo) => <div key={todo.id}> {todo.Text} </div> )}
        </div>
    )
}