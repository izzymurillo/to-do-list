import React from 'react';

/* Tabler Icon */
import { IconTrash } from '@tabler/icons';

import { Card, Checkbox, Flex, ThemeIcon, Tooltip } from '@mantine/core';

function ToDoItem({ toDo, toggleToDo, deleteToDo }) {
  return (
    <Card sx={{ overflow: 'visible', marginBottom: 10 }}>
      <Flex gap="md">
        <Checkbox
          label={toDo.task}
          sx={{
            flexGrow: 1,
            textDecoration: toDo.isComplete ? 'line-through' : 'none',
          }}
          /* ^^^ takes up available space */
          checked={toDo.isComplete}
          onChange={() => toggleToDo(toDo.id)}
        />
        <Tooltip
          label="Delete"
          transition="pop"
          withArrow
          color="pink"
          sx={{ fontSize: 12 }}>
          <ThemeIcon
            color="red"
            sx={{ cursor: 'pointer' }}
            onClick={() => deleteToDo(toDo.id)}>
            <IconTrash size={20} />
          </ThemeIcon>
        </Tooltip>
      </Flex>
    </Card>
  );
}

export default ToDoItem;
