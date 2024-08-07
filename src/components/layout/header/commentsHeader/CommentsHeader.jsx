import BackButton from '../../../ui/BackButton/BackButton';
import styles from './CommentsHeader.module.css';

const CommentsHeader = (props) => {
  return (
    <header className={styles.header}>
      <BackButton variant='small' />
      <div className={styles.headerTitle}>Комментарии</div>
    </header>
  );
};

export default CommentsHeader;
