import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import classNames from 'classnames';

import { TSubject } from '@/types/common';
import styles from '@/styles/components/sections/Subjects.module.scss';

const SubjectAnchor = styled.a<{
  brandColor: TSubject['brandColor'];
  textColor: TSubject['textColor'];
}>`
  &:hover {
    background-color: ${(props) => props.brandColor};
    color: ${(props) => props.textColor};
    border-color: ${(props) => props.brandColor};
  }
`;

const Subject: FC<TSubject> = ({ name, code, brandColor, textColor, icon }) => {
  const Icon = FaIcons[icon];

  return (
    <Link href={`/subject/${code}`}>
      <SubjectAnchor {...{ brandColor, textColor }} className={styles.subject}>
        <Icon className={styles.subject__icon} />
        <h4 className={styles.subject__name}>{name}</h4>
      </SubjectAnchor>
    </Link>
  );
};

const Subjects: FC<{ subjects: TSubject[] }> = ({ subjects }) => {
  return (
    <section className={styles.subjects}>
      <div className={classNames('container', styles.subjects__container)}>
        <h2 className={styles.subjects__title}>Posts de ...</h2>
        <div className={styles.subjects__grid}>
          {subjects.map((subject) => (
            <Subject key={subject.id} {...subject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
