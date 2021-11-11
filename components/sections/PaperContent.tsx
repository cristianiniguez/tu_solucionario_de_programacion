import { useContext } from 'react';

import PaperContext from '@/context/PaperContext';
import styles from '@/styles/components/sections/PaperContent.module.scss';

const PaperContent = () => {
  const { paper } = useContext(PaperContext);
  return (
    <section className={styles.root}>
      <h1>{paper.title}</h1>
      <div className='container'>{paper.content}</div>
    </section>
  );
};

export default PaperContent;
