import * as FaIcons from 'react-icons/fa';
import classNames from 'classnames';

import styles from '@/styles/components/sections/SubjectHero.module.scss';

const SubjectHero = ({ name, description, icon }) => {
  const Icon = FaIcons[icon];

  return (
    <section className={styles['subject-hero']}>
      <div className={classNames('container', styles['subject-hero__container'])}>
        <Icon className={styles['subject-hero__icon']} />
        <div className={styles['subject-hero__info']}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SubjectHero;
