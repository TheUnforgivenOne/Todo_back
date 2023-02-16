export interface TodoType {
  _id: string;
  title: string;
  completed: boolean;
  priority: number | string;
  description?: string;
  dateCreated?: string;
  author?: {
    username: string;
  };
}

export interface PriorityDictType {
  [key: string]: string;
}

type setStateFnParams<T> = (oldValue: T) => T;
export type setStateFnType<T> = (newValue: T | setStateFnParams<T>) => void;

export type FiltersType = {
  completed: boolean | null;
  onlyMy: boolean;
};
