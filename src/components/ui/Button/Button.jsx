import styles from './Button.module.css';

const Button = (props) => {
  const classes = `${styles.button} ${styles[props.variant]}`;

  return (
    <button className={classes} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
