/* React */
import React from 'react';
import { useState } from 'react';

/* Mantine */
import { Button, Card, Flex, TextInput } from '@mantine/core';

function ToDoForm({addToDo}) {
  const [task, setTask] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
    if (e.target.value.length >= 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (isValid) {
        addToDo(task);
        setTask('');
    }
   }

  return (
    <Card sx={{ marginBottom: 20, padding: 'md' }}>
      <form onSubmit={handleSubmit}>
        <Flex gap="md">
          <TextInput
            sx={{ flexGrow: 1 }}
            placeholder="What needs to get done?"
            value={task}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: 'grape', to: 'indigo' }}
            /* disables button */
            disabled={!isValid}>
            Add To Do
          </Button>
        </Flex>
      </form>
    </Card>
  );
}

export default ToDoForm;
