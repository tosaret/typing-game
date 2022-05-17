import styles from "./Results.module.css";

const Results = ({ correctWords, wrongWords, countCorrect }) => {
  return (
    <div className={styles.results}>
      <div className={styles.title}>
        <p>Correct results: {countCorrect}</p>
      </div>
      <div className={styles.resultsContainer}>
        <div className={styles.correctResults}>
          {correctWords.map((item, index) => (
            <div key={index} className={styles.row}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.wrongResults}>
          {wrongWords.map((item, index) => (
            <div key={index} className={styles.row}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
