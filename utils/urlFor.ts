const urlFor = (path = ''): string => {
  return `${process.env.HOST}${path}`;
};

export default urlFor;
