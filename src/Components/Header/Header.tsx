import React from 'react';
import { Box, CheckBox, Heading } from 'grommet';
import Panel from '../Panel/Panel';

interface MyHeaderProps {
  title: string;
  theme: boolean;
  onChangeTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyHeader = (props: MyHeaderProps): JSX.Element => {
  const { title, theme, onChangeTheme } = props;

  return (
    <>
      <Box fill="horizontal" align="center" justify="between" direction="row" pad="medium" background="background-contrast">
        <Heading level={4} margin="none">
          {title}
        </Heading>
        <CheckBox
          checked={theme}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>): void => { onChangeTheme(evt.target.checked); }}
          toggle
        />
      </Box>
      <Panel />
    </>
  );
}

export default MyHeader;