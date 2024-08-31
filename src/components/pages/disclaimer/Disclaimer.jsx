import { useState } from 'react';
import styles from './Disclaimer.module.css';
import Button from '../../ui/Button/Button';
import { localStorageManager } from '../../../utils/localStorageManager';
import { startupActions } from '../../../store/slices/startupSlice';
import { useDispatch } from 'react-redux';

const Disclaimer = (props) => {
  const dispatchAction = useDispatch();
  const [acceptedRules, setAcceptRules] = useState(false);

  const acceptRulesHandler = () => {
    localStorage.setItem('acceptedRules', true);
    dispatchAction(startupActions.setAcceptedRules(true));
  };

  const rejectRulesHandler = () => {
    window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  return (
    <main className={styles.container}>
      <h2 className={styles.header}>Внимание!</h2>
      <div className={styles.rules}>
        Это приложение создано исключительно в развлекательных целях и не имеет
        отношения к компании Meta Platforms Inc и её продукту Instagram. Все
        элементы, функциональность и контент предназначены для юмора и веселья.
        Мы не претендуем на достоверность информации и не гарантируем серьезного
        использования приложения. Используя приложение, вы соглашаетесь с его
        шуточным характером и принимаете все условия использования.
      </div>
      <div className={styles.confirm}>
        <div className={styles.confirmText}>
          Я внимательно прочитал согласен с условиями использования
        </div>
        <div className={styles.confirmButtons}>
          <Button onClick={acceptRulesHandler} variant='blue'>
            Принять
          </Button>
          <Button onClick={rejectRulesHandler} variant='transparentBlue'>
            Отклонить
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Disclaimer;
