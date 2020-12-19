import { FunctionComponent } from 'react';
import '../styles/pages/Subjects.css';

import { subjects } from '../data/subjects';

const Subjects: FunctionComponent = () => {
  return (
    <div className='Subjects'>
      <div className='container'>
        <h1 className='Subjects__title'>Todas nuestras materias</h1>
        <div className='Subjects__grid'>
          {subjects.map(({ id, name, description }) => (
            <div className='Subject' key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
