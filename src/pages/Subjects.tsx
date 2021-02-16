import { FunctionComponent } from 'react';
import '../styles/pages/Subjects.scss';

import Seo from '../components/Seo';
import SubjectLink from '../components/SubjectLink';
import { subjects } from '../data/subjects';

const Subjects: FunctionComponent = () => {
  return (
    <>
      <Seo title='Materias' description='Todas las materias de los posts' />
      <div className='Subjects'>
        <div className='container'>
          <h1 className='Subjects__title'>Todas nuestras materias</h1>
          <div className='Subjects__grid'>
            {subjects.map((subject) => (
              <SubjectLink subject={subject} key={subject.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subjects;
