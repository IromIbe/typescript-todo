import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'

type Todo = {
task:string;
 completed:boolean
}

const Home: NextPage = () => {

const [inputValue, setInputValue] = useState("")

const addNum = (num1: number , num2: number):number =>{
  return (num1 + num2)
}

const [todos, setTodos] = useState<Todo[]>([])


const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void=>{
  const value: string = e.target.value;
  setInputValue(value)
}
const handleAdd = ():void=>{
inputValue.length === 0 ? alert("please enter a task") :  setTodos([...todos,{ task:inputValue, completed: false}])
// localStorage.setItem("todoss", JSON.stringify(todos))
  setInputValue("")
}

const handleDel =   (index:number):void =>{
setTodos(todos.filter((todo, i)=> i !== index))
}

const handleDone = (index:number):void =>{
setTodos(todos.map((todo, i)=> (index === i ? {...todo, completed:true} : todo)))
console.log(todos[index].completed, "todo");


}

const clearAll = ():void =>{
setTodos([])
}



  return (
    <div className="main">
      <Head>
        <title>Todo App</title>
</Head>


<div className="todo">
  <h1>Todo App!</h1>
  <div className="content">
    <div className="heading">
      <h2>What do you want to do?</h2>
      <hr />
    </div>
    <div className="todo-items">
      {todos.map((todo, index)=>{return <div key={index} className='todos'>
        <p className={`${todo.completed ? "complete" : ""}`}>{todo.task}</p>
        <div className="rem">
          <button onClick={()=>handleDel(index)}>Del</button>
          {!todo.completed ?  <button className='done' onClick={()=> handleDone(index)}>Done</button>: null}

        </div>
        </div>})}
    </div>
    <div className="search">
      <input type="text" name="task" id="task" value={inputValue} onChange={handleChange} placeholder='Write here' />
      <div className='addbtn'>
      <button onClick={()=> handleAdd()}><span>+</span> Add</button>

      </div>
    </div>
    <div className='clear'>
    <button onClick={()=>clearAll()}>Clear All</button>
    </div>
  </div>

</div>


    </div>
  )
}

export default Home
