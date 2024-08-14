// Import CSS
import styles from './ActionButton.module.css';

const ActionButton = (props) => {
  const classes = `${styles.button} ${props.className}`;

  return (
    <button className={classes} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ActionButton;
