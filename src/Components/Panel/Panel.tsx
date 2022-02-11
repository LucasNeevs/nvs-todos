import { useState } from 'react';
import { Box, TextInput, Button } from 'grommet';
import { Save } from 'grommet-icons';
import { toast } from 'react-toastify';
import FollowersTable from '../Followers/Table';
import { FetchingProccess } from '../../Utils/Fetch';
import { urlFollowers } from '../../Utils/Url';
import { IFollower } from '../../Interface/IFollower';
import Field from '../Field/Field';

const Panel = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const [followers, setFollowers] = useState<IFollower[]>([]);

  const getData = async (userName: string): Promise<void> => {
    await FetchingProccess(urlFollowers, userName)
      .then((data): void => {
        setFollowers(data as IFollower[]);

        toast.success('Fetch completed');
      })
      .catch((err): void => {
        toast.error(err);
      });
  };

  return (
    <>
      <Field
        search={search}
        setSearch={setSearch}
        getData={getData}
      />
      <FollowersTable
        followers={followers}
        getData={getData}
      />
    </>
  );
};

export default Panel;