/* React */
import React, { useState } from 'react';

/* Mantime Components */
import { Container } from '@mantine/core';

/* UUID */
/* on terminal ---> npm install uuid */
import { v4 as uuidv4 } from 'uuid';

/* ToDo Components */
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function ToDoApp() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (newTask) => {
    const newToDo = {
        id: uuidv4(),
        task: newTask,
        isComplete: false,
    };

    setToDos([
        ...toDos,
        newToDo
    ])
  }

  const toggleToDo = (targetId) => {
    const updatedToDos = toDos.map(toDo => {
        if (toDo.id === targetId) {
            toDo = {
                ...toDo,
                isComplete: !toDo.isComplete,
            }
        }
        return toDo;
    });
    setToDos(updatedToDos);
  }

  const deleteToDo = (targetId) => {
    const filteredToDos = toDos.filter(toDo => toDo.id != targetId);
    setToDos(filteredToDos);
  }

  return (
    <Container sx={{ marginTop: 20 }}>
      <h1>To Do List</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </Container>
  );
}

export default ToDoApp;
