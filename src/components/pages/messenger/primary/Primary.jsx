import DialogItem from '../dialog/dialogItem/DialogItem';
import Tabs from '../tabs/Tabs';
import styles from './Primary.module.css';

const Primary = (props) => {
  const messages = [
    {
      dialogId: 'riowsx',
      sender: 'tob733',
      messages: [
        {
          content: 'Добрый день!',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: true,
        },
        {
          content: 'Привет! Как дела?',
          timestamp: '2024-08-09T14:01:00Z',
          isIncoming: false,
        },
        {
          content: 'Норм, а у тебя?',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: true,
        },
        {
          content: 'Тоже норм, ну пока!',
          timestamp: '2024-08-09T14:01:00Z',
          isIncoming: false,
        },
        {
          content: 'Пока!',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: true,
        },
      ],
    },
  ];
  return (
    <div>
      <Tabs currentTab='primary' />
      <DialogItem dialog={messages[0]} />
      <DialogItem dialog={messages[0]} />
      <DialogItem dialog={messages[0]} />
      <DialogItem dialog={messages[0]} />
    </div>
  );
};

export default Primary;
