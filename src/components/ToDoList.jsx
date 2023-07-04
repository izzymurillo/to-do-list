import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return toDos.map((toDo) => (
    <ToDoItem key={toDo.id} toDo={toDo} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
  ));
}

export default ToDoList;
