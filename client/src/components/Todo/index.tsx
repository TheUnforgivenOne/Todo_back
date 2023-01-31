import React, { FC } from 'react';
import RequestsBuilder from '../../fetchUtils/RequestsBuilder';

import { TodoType } from '../../types';

import * as Styled from './styles';

interface ITodo {
  todo: TodoType;
  fetchTodos: () => void;
}

const Todo: FC<ITodo> = ({ todo, fetchTodos }) => {
  const handleUpdate = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { _id, ...rest } = todo;

    const newTodo = await RequestsBuilder.put({
      endpoint: `/todos/${_id}`,
      body: { ...rest, completed: e.target.checked },
    });

    fetchTodos();

    console.log(newTodo);
  };

  const handleDelete = async () => {
    const deletedTodo = await RequestsBuilder.delete({
      endpoint: `/todos/${todo._id}`,
    });

    fetchTodos();

    console.log(deletedTodo);
  };

  return (
    <Styled.Container>
      <span>{todo.priority}</span>
      <input type="checkbox" checked={todo.completed} onChange={handleUpdate} />
      <Styled.Main>
        <b>{todo.title}</b>
        <span>{todo.description}</span>
      </Styled.Main>
      <span>{todo?.dateCreated?.toLocaleString('en-US')}</span>
      <Styled.DeleteButton onClick={handleDelete}>x</Styled.DeleteButton>
    </Styled.Container>
  );
};

export default Todo;
