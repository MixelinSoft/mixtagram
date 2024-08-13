import { useSelector } from 'react-redux';
import DialogItem from '../dialog/dialogItem/DialogItem';
import Tabs from '../tabs/Tabs';
import styles from './Primary.module.css';

const Primary = (props) => {
  const messages = useSelector((state) => state.direct.primary);
  return (
    <div>
      <Tabs currentTab='primary' />
      {messages.map((dialog) => (
        <DialogItem dialog={dialog} key={dialog.dialogId} />
      ))}
    </div>
  );
};

export default Primary;
