import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Возвращает на один шаг назад в истории
  };

  const buttonIcon =
    props.variant === 'small' ? (
      <svg
        className={styles.icon}
        fill='currentColor'
        height='24'
        viewBox='0 0 24 24'
        width='24'
      >
        <path d='M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z'></path>
      </svg>
    ) : props.variant === 'full' ? (
      <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
        <line
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          x1='2.909'
          x2='22.001'
          y1='12.004'
          y2='12.004'
        ></line>
        <polyline
          fill='none'
          points='9.276 4.726 2.001 12.004 9.276 19.274'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        ></polyline>
      </svg>
    ) : (
      '?'
    );
  return (
    <button className={styles.button} onClick={goBack}>
      {buttonIcon}
    </button>
  );
};

export default BackButton;
