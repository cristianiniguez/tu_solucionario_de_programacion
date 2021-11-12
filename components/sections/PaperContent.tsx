import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import PaperContext from '@/context/PaperContext';
import styles from '@/styles/components/sections/PaperContent.module.scss';

const PaperContent = () => {
  const { paper } = useContext(PaperContext);
  return (
    <section className={styles.root}>
      <div className='container'>
        <h1>{paper.title}</h1>
        <ReactMarkdown>{paper.content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default PaperContent;
