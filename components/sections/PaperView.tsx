import PaperAside from './PaperAside';
import PaperContent from './PaperContent';

import styles from '../../styles/components/PaperView.module.scss';

const PaperView = () => {
  return (
    <div className={styles.root}>
      <PaperAside />
      <PaperContent />
    </div>
  );
};

export default PaperView;
