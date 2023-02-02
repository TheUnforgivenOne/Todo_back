import React, { FC, useState } from 'react';

import RequestsBuilder from '../../fetchUtils/RequestsBuilder';
import { PriorityDictType, TodoType } from '../../types';

import * as Styled from './styles';

interface IAddTodo {
  priorityDict: PriorityDictType;
  fetchTodos: () => void;
}

const AddTodo: FC<IAddTodo> = ({ priorityDict, fetchTodos }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('2');

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const newTodo: Omit<TodoType, '_id'> = {
      title,
      description,
      priority,
      completed: false,
      dateCreated: now.toUTCString(),
    };

    await RequestsBuilder.post({
      endpoint: '/todos',
      body: newTodo,
    });

    setTitle('');
    setDescription('');
    setPriority('2');
    fetchTodos();
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
          {Object.entries(priorityDict).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <Styled.AddButton type="submit">Add</Styled.AddButton>
    </Styled.Form>
  );
};

export default AddTodo;
