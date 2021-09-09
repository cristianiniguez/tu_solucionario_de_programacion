import { FC } from 'react';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

import { TPaper } from '@/types/common';
import styles from '@/styles/components/sections/PostPapers.module.scss';

type PostPapersProps = {
  papers: TPaper[];
};

const PostPapers: FC<PostPapersProps> = ({ papers }) => {
  return (
    <section className={styles.root}>
      <div className='container'>
        <ul className='reseted'>
          {papers.map((paper) => (
            <li key={paper.id} className={styles.item}>
              <Link href={paper.id}>
                <a className={styles.link}>
                  <span>{paper.title}</span>
                  <FaEye />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PostPapers;
