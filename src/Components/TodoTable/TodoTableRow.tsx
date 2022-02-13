import { useState } from 'react';
import { Button, TableCell, TableRow } from 'grommet';
import { Edit, Trash } from 'grommet-icons';
import { ITodo } from '../../Interfaces/ITodo';
import TodoEditInput from '../TodoEdit/TodoEditInput';

interface TodoTableRowProps {
  todo: ITodo;
  onDeleteTodo: (Guid: string) => Promise<void>;
  onEditTodo: (Guid: string, newTodo: string) => Promise<void>;
}

const TodoRow = (props: TodoTableRowProps): JSX.Element => {
  const { todo, onDeleteTodo, onEditTodo } = props;

  const [editting, setEditting] = useState<boolean>(false);

  return (
    <TableRow key={todo.Id as number}>
      <TableCell>
        {todo.Guid as string}
      </TableCell>
      <TableCell>
        {
          (editting) ? (
            <TodoEditInput
              guid={todo.Guid as string}
              todo={todo.Todo as string}
              editting={editting}
              onCompleteEditting={setEditting}
              onEditTodo={onEditTodo}
            />
          ) : (
            <>
              {todo.Todo as string}
            </>
          )
        }
      </TableCell>
      <TableCell>
        <Button
          icon={<Trash color="red" />}
          onClick={(): void => { onDeleteTodo(todo.Guid as string); }}
        />
        <Button
          icon={<Edit />}
          onClick={(): void => { setEditting(!editting); }}
        />
      </TableCell>
    </TableRow >
  );
}

export default TodoRow;