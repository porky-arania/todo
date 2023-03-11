import React from "react";

import debounce from 'lodash.debounce';

import './edit.css';
import { updateTodo } from "../../api/api";

export default function Task({
  id, task, todo, setTodo, setTodos
}){
  return (
    <div key={task._id} className='todo-task' onClick={e => {
      const input = e.target.firstChild;
      if(input) input.click()
    }}>
      <input 
        type='checkbox' 
        className="checkbox"  
        defaultChecked={task.completed}
        onClick={e => e.stopPropagation()}
        onChange={ e => {
          task.completed = !task.completed;
          debounce(updateTodo(todo, setTodo, setTodos), 800);
        }}
      />
      <p>{task.title}</p>
      <div className='task-options' onClick={ e => {
          e.stopPropagation();
          todo.tasks = todo.tasks.filter(currTask => currTask._id !== task._id);
          debounce(updateTodo(todo, setTodo, setTodos), 800);
        }}>
        <p>...</p>
      </div>
    </div>
  )
}