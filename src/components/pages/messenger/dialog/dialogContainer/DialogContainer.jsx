import { useSelector } from 'react-redux';
import MessageForm from '../messageForm/MessageForm';
import styles from './DialogContainer.module.css';
import Message from '../message/Message';
import { getMessagePosition } from '../../../../../utils/getMessagePosition';

const DialogContainer = (props) => {
  // Get Users From Store
  const users = useSelector((state) => state.users.users);
  // Find Interlocutor in Users
  const interlocutor = users.find((user) => {
    if (user.userId === props.dialog.sender) {
      return user;
    }
  });
  const messages = props.dialog.messages;

  return (
    <div className={styles.container}>
      {messages.map((message, index) => (
        <Message
          key={message.messageId}
          position={getMessagePosition(messages, index)}
          content={message.content}
          user={interlocutor}
          isIncoming={message.isIncoming}
        />
      ))}
      <MessageForm />
    </div>
  );
};

export default DialogContainer;
