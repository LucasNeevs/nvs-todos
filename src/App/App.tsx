import { Grommet, Box, Heading } from 'grommet';
import Todos from '../Components/Todos/Todos';
import '../styles.css';

const App = (): JSX.Element => (
  <Grommet full>
    <Box fill="horizontal" align="center" justify="center" pad="large">
      <Heading level={1}>NVS TODOS</Heading>
    </Box>
    <Todos />
  </Grommet>
);

export default App;