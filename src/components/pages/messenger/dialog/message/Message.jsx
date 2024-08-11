import styles from './Message.module.css';

const Message = (props) => {
  // Helper Variables
  const content = props.content;
  const user = props.user;
  const isIncoming = props.isIncoming;
  const position = props.position;

  const borderRadiusClass = isIncoming
    ? styles[`incoming-${position}`]
    : styles[`outgoing-${position}`];

  return (
    <div
      className={`${styles.container} ${
        isIncoming ? styles.incomingContainer : styles.outcomingContainer
      }`}
    >
      {isIncoming && user && (
        <div className={styles.userPhoto}>
          <img
            src={user.userPhoto}
            alt='User Photo'
            width='28px'
            height='28px'
          />
        </div>
      )}
      <div className={`${styles.content} ${borderRadiusClass}`}>
        <div>{props.content}</div>
      </div>
    </div>
  );
};

export default Message;
