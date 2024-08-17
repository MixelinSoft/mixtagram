import { useDispatch, useSelector } from 'react-redux';
import MessageForm from '../messageForm/MessageForm';
import styles from './DialogContainer.module.css';
import Message from '../message/Message';
import { getMessagePosition } from '../../../../../utils/getMessagePosition';
import { directActions } from '../../../../../store/slices/directSlice';
import { useEffect, useRef } from 'react';
import { getAnimalResponse } from '../../../../../utils/chatBot';
import { localStorageManager } from '../../../../../utils/localStorageManager';

const DialogContainer = (props) => {
  // Create Dispatch Function
  const dispatchAction = useDispatch();
  // Get Users From Store
  const users = useSelector((state) => state.users.users);
  // Find Interlocutor in Users
  const interlocutor = users.find((user) => {
    if (user.userId === props.dialog.sender) {
      return user;
    }
  });
  const messages = props.dialog.messages;

  const storeMessages = useSelector((state) => state.direct.primary);

  // Create MessagesEnd Ref
  const messagesEndRef = useRef(null);

  // Send Meesage Function
  const sendMessage = (content) => {
    dispatchAction(
      directActions.sendMessage({
        dialogId: props.dialog.dialogId,
        content,
        isIncoming: false,
      }),
      console.log(messages),
    );
    getAnimalResponse(interlocutor.animal, (response) => {
      dispatchAction(
        directActions.sendMessage({
          dialogId: props.dialog.dialogId,
          content: response,
          isIncoming: true,
        }),
      );
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
      <div ref={messagesEndRef} />
      <MessageForm onSendMessage={sendMessage} />
    </div>
  );
};

export default DialogContainer;
