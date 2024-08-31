import styles from './Button.module.css';

const Button = (props) => {
  const classes = `${styles.button} ${styles[props.variant]}`;
  const onClickHandler = () => {
    props.onClick();
  };

  return (
    <button className={classes} type={props.type} onClick={onClickHandler}>
      {props.children}
    </button>
  );
};

export default Button;
