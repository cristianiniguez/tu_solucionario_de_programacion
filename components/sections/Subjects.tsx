import { FC } from 'react';
import classNames from 'classnames';

import { TSubject } from '@/types/common';
import styles from '@/styles/components/sections/Subjects.module.scss';
import SubjectLink from '../SubjectLink';

const Subjects: FC<{ subjects: TSubject[] }> = ({ subjects }) => {
  return (
    <section className={styles.subjects}>
      <div className={classNames('container', styles.subjects__container)}>
        <h2 className={styles.subjects__title}>Posts de ...</h2>
        <div className={styles.subjects__grid}>
          {subjects.map((subject) => (
            <SubjectLink key={subject.id} {...subject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
