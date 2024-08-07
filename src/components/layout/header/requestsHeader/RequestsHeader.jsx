import { useSelector } from 'react-redux';
import BackButton from '../../../ui/BackButton/BackButton';
import styles from './RequestsHeader.module.css';

const RequestsHeader = (props) => {
  return (
    <header className={styles.header}>
      <BackButton variant='full' />
      <div className={styles.title}>Запросы на переписку</div>
      <div></div>
    </header>
  );
};

export default RequestsHeader;
