import { FC } from 'react';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

import { TPost } from '@/types/common';

import styles from '@/styles/components/PostLink.module.scss';

type PostLinkProps = TPost;

const PostLink: FC<PostLinkProps> = ({ id, name }) => {
  return (
    <Link href={`/post/${id}`}>
      <a className={styles.link}>
        <p>{name}</p>
        <FaEye />
      </a>
    </Link>
  );
};

export default PostLink;
