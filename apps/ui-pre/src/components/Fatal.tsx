import { FunctionComponent } from 'react';

type FatalProps = {
  error: Error;
};

const Fatal: FunctionComponent<FatalProps> = ({ error }) => {
  return <div className='Fatal'>{error.message}</div>;
};

export default Fatal;
