import { useState } from 'react';
import { ITodo } from '../../Interfaces/ITodo';
import TodoInput from '../TodoInput/TodoInput';
import TodoTable from '../TodoTable/TodoTable';

const Todos = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onCreateTodo = async (newTodo: string): Promise<void> => {
    setTodos([
      ...todos, {
        Id: todos.length + 1,
        Guid: (Math.random() * 99999).toFixed(0).toString(),
        Todo: newTodo,
      }
    ]);
  }

  const onDeleteTodo = async (Guid: string): Promise<void> => {
    const newTodos = todos.filter((t) => t.Guid !== Guid);

    setTodos(newTodos);
  }

  const onEditTodo = async (Guid: string, newTodo: string): Promise<void> => {
    const newTodos = todos;
    const targetIndex = todos.findIndex((t): boolean => (t.Guid === Guid));
    const findTodo = newTodos[targetIndex];

    findTodo.Todo = newTodo;

    newTodos.map((t) => (t.Guid === Guid) ? { ...todos, ...newTodos } : todos);

    setTodos(newTodos);
  }

  return (
    <>
      <TodoInput
        onCreateTodo={onCreateTodo}
      />
      <TodoTable
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
      />
    </>
  );
}

export default Todos;