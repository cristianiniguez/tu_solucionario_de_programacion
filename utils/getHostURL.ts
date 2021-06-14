import { GetServerSidePropsContext } from 'next';

const getHostURL = (path = ''): string => {
  return `${process.env.HOST}${path}`;
};

export default getHostURL;
