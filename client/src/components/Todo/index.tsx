import React, { FC } from 'react';
import RequestsBuilder from '../../fetchUtils/RequestsBuilder';

import { PriorityDictType, TodoType } from '../../types';

import * as Styled from './styles';

interface ITodo {
  todo: TodoType;
  priorityDict: PriorityDictType;
  fetchTodos: () => void;
}

const Todo: FC<ITodo> = ({ todo, priorityDict, fetchTodos }) => {
  const handleUpdate = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { _id, ...rest } = todo;

    await RequestsBuilder.put({
      endpoint: `/todos/${_id}`,
      body: { ...rest, completed: e.target.checked },
    });

    fetchTodos();
  };

  const handleDelete = async () => {
    await RequestsBuilder.delete({
      endpoint: `/todos/${todo._id}`,
    });

    fetchTodos();
  };

  return (
    <Styled.Container>
      <Styled.Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={handleUpdate}
      />
      <Styled.Main>
        <Styled.Title>
          <b>{todo.title}</b>
          {todo?.dateCreated?.split('T')[0]}
        </Styled.Title>
        <span>{todo.description}</span>
      </Styled.Main>
      <Styled.Priority>
        Priority: {priorityDict?.[todo.priority]}
      </Styled.Priority>
      <Styled.DeleteButton onClick={handleDelete}>x</Styled.DeleteButton>
    </Styled.Container>
  );
};

export default Todo;
