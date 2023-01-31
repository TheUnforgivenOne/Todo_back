export interface TodoType {
  _id: string;
  title: string;
  completed: boolean;
  priority: number | string;
  description?: string;
  dateCreated?: Date;
}
