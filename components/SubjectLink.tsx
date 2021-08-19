import { FC } from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';

import { TSubject } from '@/types/common';

import styles from '@/styles/components/SubjectLink.module.scss';
import classNames from 'classnames';

type SubjectLinkProps = TSubject;

const SubjectLink: FC<SubjectLinkProps> = ({ name, slug, brandColor, textColor, icon }) => {
  const Icon = FaIcons[icon];

  return (
    <>
      <Link href={`/subject/${slug}`}>
        <a className={classNames('link', styles.link)}>
          <Icon />
          <h4>{name}</h4>
        </a>
      </Link>

      <style jsx>{`
        .link:hover {
          background-color: ${brandColor};
          color: ${textColor};
          border-color: ${brandColor};
        }
      `}</style>
    </>
  );
};

export default SubjectLink;
