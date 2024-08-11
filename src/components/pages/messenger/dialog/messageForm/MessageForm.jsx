import { useState } from 'react';
import styles from './MessageForm.module.css';
import ActionButton from '../../../../ui/ActionButton/ActionButton';

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
    console.log(inputText);
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
            <button type='submit'>Отправить</button>
          ) : (
            <div className={styles.actionButtons}>
              {' '}
              <ActionButton className={styles.actionButton}>
                <svg
                  aria-label='Добавить фото или видео'
                  class='x1lliihq x1n2onr6 x5n08af'
                  fill='currentColor'
                  height='24'
                  role='img'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <title>Добавить фото или видео</title>
                  <path
                    d='M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z'
                    fill-rule='evenodd'
                  ></path>
                  <path
                    d='m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905'
                    fill='none'
                    stroke='currentColor'
                    stroke-linejoin='round'
                    stroke-width='2'
                  ></path>
                  <path
                    d='M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z'
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                  ></path>
                </svg>
              </ActionButton>
              <ActionButton>
                <svg
                  fill='currentColor'
                  height='24'
                  role='img'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z'></path>
                </svg>
              </ActionButton>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
