import React, { FC, useState } from 'react';

import RequestsBuilder from '../../utils/RequestsBuilder';
import { PriorityDictType, TodoType } from '../../types';

import * as S from './styles';

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

    const todo: Omit<TodoType, '_id'> = {
      title,
      description,
      priority,
      completed: false,
    };

    await RequestsBuilder.post({
      endpoint: '/todos',
      body: { todo },
    });

    setTitle('');
    setDescription('');
    setPriority('2');
    fetchTodos();
  };

  return (
    <S.Form onSubmit={handleAddTodo}>
      <S.Input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <S.Input
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
      <S.AddButton type="submit">Add</S.AddButton>
    </S.Form>
  );
};

export default AddTodo;
