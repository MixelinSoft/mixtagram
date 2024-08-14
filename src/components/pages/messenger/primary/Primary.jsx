import { useDispatch, useSelector } from 'react-redux';
import DialogItem from '../dialog/dialogItem/DialogItem';
import Tabs from '../tabs/Tabs';
import styles from './Primary.module.css';
import { useEffect } from 'react';
import getDirect from '../../../../services/getDirect';

const Primary = (props) => {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Messages From Server
  useEffect(() => {
    dispatchAction(getDirect());
  }, []);
  // Get Messages From Store
  const messages = useSelector((state) => state.direct.primary);

  return (
    <div>
      <Tabs currentTab='primary' />
      {messages &&
        messages.map((dialog) => (
          <DialogItem dialog={dialog} key={dialog.dialogId} />
        ))}
    </div>
  );
};

export default Primary;
