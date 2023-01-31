import React, { FC, useState } from 'react';

import RequestsBuilder from '../../fetchUtils/RequestsBuilder';
import { TodoType } from '../../types';

import * as Styled from './styles';

interface IAddTodo {
  fetchTodos: () => void;
}

const AddTodo: FC<IAddTodo> = ({ fetchTodos }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('2');

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Omit<TodoType, '_id'> = {
      title,
      description,
      priority,
      completed: false,
      dateCreated: new Date(),
    };

    const data = await RequestsBuilder.post({
      endpoint: '/todos',
      body: newTodo,
    });

    setTitle('');
    setDescription('');
    setPriority('2');
    fetchTodos();

    console.log(data);
  };

  return (
    <Styled.Form onSubmit={handleAddTodo}>
      <Styled.Input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Styled.Input
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <label htmlFor="priority">Priority: </label>
        <select
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <Styled.AddButton type="submit">Add</Styled.AddButton>
    </Styled.Form>
  );
};

export default AddTodo;
