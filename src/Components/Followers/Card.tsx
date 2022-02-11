import { useEffect } from 'react';
import {
  Card, CardBody, CardHeader, Image, Anchor,
} from 'grommet';
import { IFollower } from '../../Interface/IFollower';

interface FollowerCardProps {
  follower: IFollower;
  getData: (userName: string) => Promise<void>;
}

const FollowerCard = (props: FollowerCardProps): JSX.Element => {
  const { follower, getData } = props;

  useEffect((): void => {
    console.log(follower);
  }, []);

  return (
    <Card style={{ height: '300px' }}>
      <CardHeader>
        <Image
          src={follower.avatar_url as string}
          alt={`user-image-${follower.login as string}`}
          style={{
            width: '100%',
            objectFit: 'contain'
          }}
        />
      </CardHeader>
      <CardBody align="center" justify="center">
        <Anchor
          onClick={(): void => { getData(follower.login as string); }}
          label={follower.login as string}
        />
      </CardBody>
    </Card>
  );
};

export default FollowerCard;