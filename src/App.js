import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent/>
      </header>
    </div>
  );
}

const ToDoComponent = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [importance,setImportance] = useState('')
  const [toDoList,setToDoList] = useState([])
  return (
    <div>
      <h2>current data</h2>
      <p>title :{title}, description:{description}, importance :{importance}</p>
      {/* <p>TodoList: {toDoList}</p> */}
      <input 
        type="text" 
        placeholder="title" value={title} 
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle)
        }}/>
      <input 
        type="text" 
        placeholder="description" value={description} 
        onChange={(e) => {
          const newDescription = e.target.value;
          setDescription(newDescription)
        }}
       />
      
      <select  
      onChange={(e) => {
        setImportance(e.target.value)
      }}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button type="submit"
      onClick={(e) => {
        const newItem = {title:title, description:description,importance:importance}
        // toDoList.push(newItem)
        console.log(newItem)
        const newList = [...toDoList]
        newList.push(newItem)
        setToDoList(newList)
      }}>
        submit
      </button>
      {/* to do list */}
      <h3>New to-do list:</h3>
      {toDoList.map((ele,index) => {
        return (
          <div key={`list-number-${index + 1}`}>
            {ele.title}
            {ele.description}
            {ele.importance}
          </div>
        )
      })}
    </div>
  )
}


export default App;
