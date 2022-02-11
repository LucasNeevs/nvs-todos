import { Box, TextInput, Button } from 'grommet';
import { Save } from 'grommet-icons';

interface FieldProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getData: (userName: string) => Promise<void>;
}

const Field = (props: FieldProps): JSX.Element => {
  const { search, setSearch, getData } = props;

  return (
    <>
      <Box fill="horizontal" align="center" justify="center" pad="large">
        <Box width="large" align="center" justify="center" direction="row">
          <TextInput
            value={search}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>): void => {
              setSearch(evt.target.value);
            }}
            onKeyPress={(evt): void => {
              if (evt.key === 'Enter' || evt.key === 'enter') {
                getData(search);
                setSearch('');
              }
            }}
          />
          <Button
            label="Submit"
            onClick={(): void => {
              getData(search);
              setSearch('');
            }}
            style={{ padding: 9, borderRadius: 2 }}
            icon={<Save />}
            reverse
            primary
          />
        </Box>

      </Box>
    </>
  );
};

export default Field;