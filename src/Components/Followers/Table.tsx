import { useContext } from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Box, Grid, ResponsiveContext,
} from 'grommet';
import FollowerCard from './Card';
import { IFollower } from '../../Interface/IFollower';

interface FollowersTableProps {
  followers: IFollower[];
  getData: (userName: string) => Promise<void>;
}

const FollowersTable = (props: FollowersTableProps): JSX.Element => {
  const { followers, getData } = props;

  const size = useContext(ResponsiveContext);

  return (
    <Box pad="medium">
      <Grid columns={(size !== 'small') ? 'small' : '100%'} rows="medium" gap="small">
        {
          (followers.length > 0) && (
            <>
              {
                followers.map((follower): JSX.Element => (
                  <FollowerCard key={follower.id} follower={follower} getData={getData} />
                ))
              }
            </>
          )
        }
      </Grid>
    </Box>
  );
};

export default FollowersTable;