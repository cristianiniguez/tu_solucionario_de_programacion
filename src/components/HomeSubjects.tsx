import { FunctionComponent } from 'react';

import HomeSubject from './HomeSubject';
import { subjects } from '../data/subjects';
import '../styles/components/HomeSubjects.css';

const HomeSubjects: FunctionComponent = () => {
  return (
    <section className='HomeSubjects'>
      <div className='container HomeSubjects__container'>
        <h2 className='HomeSubjects__title'>Artículos de ...</h2>
        <div className='HomeSubjects__grid'>
          {subjects.map((subject) => (
            <HomeSubject key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSubjects;
