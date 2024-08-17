import { useDispatch, useSelector } from 'react-redux';
import styles from './LoadingBar.module.css';
import { useEffect } from 'react';
import { loadingActions } from '../../../store/slices/loadingSlice';

const LoadingBar = () => {
  const dispatch = useDispatch();
  const loadingProgress = useSelector((state) => state.loading.loadingProgress);

  useEffect(() => {
    if (loadingProgress < 100) {
      const interval = setInterval(() => {
        dispatch(loadingActions.setLoadingProgress(loadingProgress + 10));
      }, 100);

      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        dispatch(loadingActions.setLoadingProgress(100));
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [loadingProgress, dispatch]);

  return (
    <div className={styles.loadingBarContainer}>
      {loadingProgress < 100 && (
        <div
          className={styles.loadingBar}
          style={{ width: `${loadingProgress}%` }}
        ></div>
      )}
    </div>
  );
};

export default LoadingBar;
