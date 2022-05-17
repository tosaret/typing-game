import styles from "./Button.module.css";

const Button = ({ disabled, handleButton }) => {
  return (
    <button className={styles.button} onClick={handleButton}>
      {disabled ? "Start" : "Restart"}
    </button>
  );
};

export default Button;
