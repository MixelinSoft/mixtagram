import { useState } from 'react';
import styles from './MessageForm.module.css';
import ActionButton from '../../../../ui/ActionButton/ActionButton';
import Icon from '../../../../ui/Icon/Icon';

const MessageForm = (props) => {
  // Create Input Text State
  const [inputText, setInputText] = useState('');
  // Create Input Text Handler
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  // Send Message
  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      props.onSendMessage(inputText);
    }
    setInputText('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <input
          className={styles.input}
          onChange={inputTextHandler}
          value={inputText}
          placeholder='Напишите сообщение...'
          type='text'
        />
        <div className={styles.actions}>
          {inputText.length > 0 ? (
            <button className={styles.sendButton} type='submit'>
              Отправить
            </button>
          ) : (
            <div className={styles.actionButtons}>
              <label className={styles.actionButton} htmlFor='file'>
                <Icon icon='image' />
              </label>
              <input id='file' type='file' hidden />
              <ActionButton type='reset'>
                <Icon icon='heart' />
              </ActionButton>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
