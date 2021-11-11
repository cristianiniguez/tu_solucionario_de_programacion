import PaperAside from './PaperAside';

import styles from '../../styles/components/PaperView.module.scss';

const PaperView = () => {
  return (
    <section className={styles.root}>
      <PaperAside />
    </section>
  );
};

export default PaperView;
