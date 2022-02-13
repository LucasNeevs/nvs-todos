import { useState } from 'react';
import { Box, Button, TextInput } from 'grommet';
import { Save } from 'grommet-icons';

interface ITodoEditInput {
  guid: string;
  todo: string;
  editting: boolean;
  onCompleteEditting: React.Dispatch<React.SetStateAction<boolean>>;
  onEditTodo: (Guid: string, newTodo: string) => Promise<void>;
}

const TodoEditInput = (props: ITodoEditInput): JSX.Element => {
  const {
    guid, todo, editting, onCompleteEditting, onEditTodo,
  } = props;

  const [newTodo, setNewTodo] = useState<string>(todo);

  return (
    <Box width="medium" align="center" justify="center" direction="row">
      <TextInput
        value={newTodo}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>): void => {
          setNewTodo(evt.target.value);
        }}
      />
      <Button
        icon={<Save />}
        onClick={(): void => {
          onEditTodo(guid, newTodo);
          setNewTodo('');
          onCompleteEditting(!editting);
        }}
        primary
        reverse
      />
    </Box>
  );
}

export default TodoEditInput;