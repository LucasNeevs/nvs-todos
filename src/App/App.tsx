import { useState } from 'react';
import { Grommet } from 'grommet';
import MyHeader from '../Components/Header/Header';
import MyTheme from '../theme';
import '../styles.css';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState<boolean>(false);

  return(
    <Grommet full theme={MyTheme} themeMode={(theme) ? 'dark' : 'light'}>
      <MyHeader title="NVS Git Fetch" theme={theme} onChangeTheme={setTheme} />
    </Grommet>
  );
};

export default App;
