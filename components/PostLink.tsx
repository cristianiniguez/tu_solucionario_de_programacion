import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FaEye } from 'react-icons/fa';

import { TPost } from '@/types/common';

import styles from '@/styles/components/PostLink.module.scss';

type PostLinkProps = TPost & {
  brandColor: string;
  textColor: string;
};

const PostLink: FC<PostLinkProps> = ({ id, name, brandColor, textColor }) => {
  return (
    <>
      <Link href={`/post/${id}`}>
        <a className={classNames('link', styles.link)}>
          <p>{name}</p>
          <FaEye />
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

export default PostLink;
