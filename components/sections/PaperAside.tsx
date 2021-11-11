import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import classNames from 'classnames';

import PaperContext from '@/context/PaperContext';
import styles from '@/styles/components/PaperAside.module.scss';

const PaperAside = () => {
  const [shown, setShown] = useState(false);
  const { post, papers } = useContext(PaperContext);
  const router = useRouter();

  const paperId = router.query.paperId as string;
  const Arrow = shown ? FaArrowLeft : FaArrowRight;

  return (
    <aside className={classNames(styles.root, { [styles['root--shown']]: shown })}>
      <div className={styles.controls}>
        <Link href={`/post/${post.id}`}>
          <a className={styles['post-title']}>{post.name}</a>
        </Link>
        <Arrow className={styles.icon} onClick={() => setShown(!shown)} />
      </div>
      <ol className={styles.tablist}>
        {papers.map((paper, i) => (
          <li
            key={i}
            className={classNames(styles.tab, {
              [styles['tab--active']]: paper.id === paperId,
            })}
          >
            <Link href={`/post/${post.id}/paper/${paper.id}`}>
              <a>
                {shown ? (
                  <ReactMarkdown>{paper.title}</ReactMarkdown>
                ) : (
                  <span>{paper.position}</span>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default PaperAside;
