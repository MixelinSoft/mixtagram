import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Возвращает на один шаг назад в истории
  };
  return (
    <button className={styles.button} onClick={goBack}>
      <svg
        className={styles.icon}
        fill='currentColor'
        height='24'
        viewBox='0 0 24 24'
        width='24'
      >
        <path d='M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z'></path>
      </svg>
    </button>
  );
};

export default BackButton;
