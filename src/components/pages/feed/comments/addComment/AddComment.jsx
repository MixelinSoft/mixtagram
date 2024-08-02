import { useState } from 'react';
import styles from './AddComment.module.css';

const AddComment = (props) => {
  // Create Input Comment State
  const [inputText, setInputText] = useState('');
  // Create Input Handler
  const inputTextHandler = (text) => {
    setInputText(text.target.value);
  };
  // Create AddComment Handler
  const addCommentHandler = (event) => {
    event.preventDefault();
    console.log(inputText);
    setInputText('');
  };
  return (
    <div className={styles.container}>
      {props.userPhoto && (
        <div className={styles.userPhoto}>
          <img
            src={props.userPhoto}
            alt='userPhoto'
            width='32px'
            height='32px'
          />
        </div>
      )}
      <form className={styles.form} onSubmit={addCommentHandler}>
        <textarea
          rows={inputText.length === 0 ? '1' : '4'}
          type='text'
          className={styles.input}
          placeholder='Добавьте комментарий...'
          value={inputText}
          onChange={inputTextHandler}
        />
        <button className={styles.button} type='submit'>
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default AddComment;
