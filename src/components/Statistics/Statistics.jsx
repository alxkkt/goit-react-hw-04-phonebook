import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const positivePercentageValue = good ? positivePercentage : '0';

  return (
    <ul className={styles.feedbackRatingList}>
      <li className={styles.feedbackRatingListItem}>Good: {good}</li>
      <li className={styles.feedbackRatingListItem}>Neutral: {neutral}</li>
      <li className={styles.feedbackRatingListItem}>Bad: {bad}</li>
      <li className={styles.feedbackRatingListItem}>Total: {total}</li>
      <li className={styles.feedbackRatingListItem}>
        Positive Feedback: {positivePercentageValue}%
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
