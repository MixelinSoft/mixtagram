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
  // Get Messages From Server
  useEffect(() => {
    const localDirect = localStorageManager('get', 'direct');
    if (!localDirect) {
      dispatchAction(getDirect());
    }
    if (messages.length > 0 && !localDirect) {
      localStorageManager('set', 'direct', messages);
    }
    if (localDirect && localDirect.length > 0 && messages.length === 0) {
      dispatchAction(directActions.setPrimary(localDirect));
    }
    if (messages.length > 0) {
      localStorageManager('set', 'direct', messages);
    }
  }, [messages]);

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
