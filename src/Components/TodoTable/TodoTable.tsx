import { Box, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import { ITodo } from '../../Interfaces/ITodo';
import TodoTableRow from './TodoTableRow';

interface TodoTableProps {
  todos: ITodo[];
  onDeleteTodo: (Guid: string) => Promise<void>;
  onEditTodo: (Guid: string, newTodo: string) => Promise<void>;
}

const TodoTable = (props: TodoTableProps): JSX.Element => {
  const { todos, onDeleteTodo, onEditTodo } = props;

  return (
    <Box fill="horizontal" align="center" justify="center">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Guid</TableCell>
            <TableCell>Todo</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            todos.map((t): JSX.Element => (
              <TodoTableRow
                todo={t as ITodo}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo}
              />
            ))
          }
        </TableBody>
      </Table>
    </Box>
  );
}

export default TodoTable;