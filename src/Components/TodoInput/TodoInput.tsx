import { useState } from 'react';
import { Box, TextInput } from 'grommet';
import { Save } from 'grommet-icons';
import { StyledButton } from '../StyledButton/StyledButton';

interface TodoInputProps {
  onCreateTodo: (newTodo: string) => Promise<void>;
}

const TodoInput = (props: TodoInputProps): JSX.Element => {
  const { onCreateTodo } = props;

  const [todo, setTodo] = useState<string>('');

  return (
    <Box fill="horizontal" align="center" justify="center" pad="large">
      <Box width="medium" align="center" justify="center" direction="row">
        <TextInput
          value={todo}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>): void => {
            setTodo(evt.target.value);
          }}
          onKeyPress={(evt) => {
            if (evt.key === 'Enter' || evt.key === 'enter') {
              onCreateTodo(todo);
              setTodo('');
            }
          }}
        />
        <StyledButton
          label="Create"
          icon={<Save />}
          onClick={(): void => {
            onCreateTodo(todo);
            setTodo('');
          }}
          primary
          reverse
        />
      </Box>
    </Box>
  );
}

export default TodoInput;