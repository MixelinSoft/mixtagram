import { useDispatch, useSelector } from 'react-redux';
import DialogItem from '../dialog/dialogItem/DialogItem';
import Tabs from '../tabs/Tabs';
import styles from './Primary.module.css';
import { useEffect } from 'react';
import getDirect from '../../../../services/getDirect';
import { localStorageManager } from '../../../../utils/localStorageManager';
import { directActions } from '../../../../store/slices/directSlice';

const Primary = (props) => {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Messages From Store
  const messages = useSelector((state) => state.direct.primary);

  if (messages.length === 0) {
    dispatchAction(getDirect());
  }

  return (
    <div>
      <Tabs currentTab='primary' />
      {messages.length > 0 &&
        messages.map((dialog) => (
          <DialogItem dialog={dialog} key={dialog.dialogId} />
        ))}
    </div>
  );
};

export default Primary;
