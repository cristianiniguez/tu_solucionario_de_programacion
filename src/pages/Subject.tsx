import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NotFound from './NotFound';

import { subjects } from '../data/subjects';
import '../styles/pages/Subject.scss';

type TParams = {
  endpoint: string | undefined;
};

const Subject = ({ match }: RouteComponentProps<TParams>) => {
  const [posts] = useState([]);

  const matchedSubject = subjects.find((sub) => sub.endpoint === match.params.endpoint);

  if (!matchedSubject) {
    return <NotFound />;
  }

  const { name, description, icon } = matchedSubject;

  return (
    <div className='Subject'>
      <section className='Subject__hero'>
        <div className='container Subject__hero-container'>
          <FontAwesomeIcon className='Subject__icon' icon={icon} />
          <div className='Subject__info'>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>
      <section className='Subject__posts'>
        <div className='container'>
          {posts.map((post) => (
            <h2>Post #1</h2>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subject;
