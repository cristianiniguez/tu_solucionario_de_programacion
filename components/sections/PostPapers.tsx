import { FC, useContext } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { FaEye } from 'react-icons/fa';

import { TPaper } from '@/types/common';
import styles from '@/styles/components/sections/PostPapers.module.scss';
import PostContext from '@/context/PostContext';

type PostPapersProps = {
  papers: TPaper[];
};

const PostPapers: FC<PostPapersProps> = ({ papers }) => {
  const { id } = useContext(PostContext);

  return (
    <section className={styles.root}>
      <div className='container'>
        <ul className='reseted'>
          {papers.map((paper) => (
            <li key={paper.id} className={styles.item}>
              <Link href={`/post/${id}/paper/${paper.id}`}>
                <a className={styles.link}>
                  <ReactMarkdown>{paper.title}</ReactMarkdown>
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
