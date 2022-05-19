import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.feedbackBtnList}>
      <li className={styles.feedbackBtnListItem}>
        <button
          type="button"
          className={styles.feedbackBtn}
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </button>
      </li>
      <li className={styles.feedbackBtnListItem}>
        <button
          type="button"
          className={styles.feedbackBtn}
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
      </li>
      <li className={styles.feedbackBtnListItem}>
        <button
          type="button"
          className={styles.feedbackBtn}
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
