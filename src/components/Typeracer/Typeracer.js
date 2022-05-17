import Button from "../Button/Button";

import styles from "./Typeracer.module.css";

const Typeracer = (props) => {
  const {
    handleInput,
    handleButton,
    setInputValue,
    inputValue,
    newWord,
    time,
    disabled,
  } = props;

  return (
    <div className={styles.typeRacer}>
      <div className={styles.wordOutput}>
        <p>{newWord}</p>
      </div>
      <div className={styles.time}>
        <p>{time}</p>
      </div>
      <div className={styles.wordValues}>
        <input
          type="text"
          value={inputValue}
          onKeyDown={handleInput}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={disabled && disabled}
          placeholder={disabled ? "" : "Start typing and hit Enter..."}
        />
        <Button disabled={disabled} handleButton={handleButton} />
      </div>
    </div>
  );
};

export default Typeracer;
