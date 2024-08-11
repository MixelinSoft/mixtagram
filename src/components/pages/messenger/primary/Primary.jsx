import DialogItem from '../dialog/dialogItem/DialogItem';
import Tabs from '../tabs/Tabs';
import styles from './Primary.module.css';

const Primary = (props) => {
  const messages = [
    {
      dialogId: 'riowsx',
      sender: 'fil123',
      isMuted: false,
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
        {
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum amet error, illo distinctio laboriosam, eum doloremque eligendi similique non quae assumenda explicabo saepe, recusandae earum sed! Reprehenderit, molestias soluta?',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: true,
        },
      ],
    },
  ];
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
