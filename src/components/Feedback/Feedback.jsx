import { Component } from 'react';

import styles from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = property => {
    this.setState(prevState => {
      return {
        [property]: (prevState[property] += 1),
      };
    });
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);

    return values.reduce(
      (prevValue, currentValue) => (prevValue += currentValue),
      0,
    );
  };
  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = good
      ? this.countPositiveFeedbackPercentage()
      : '0';
    const totalCount = this.countTotalFeedback();

    return (
      <section>
        <h2>Please, leave feedback</h2>
        <ul className={styles.feedbackBtnList}>
          <li className={styles.feedbackBtnListItem}>
            <button
              type="button"
              className={styles.feedbackBtn}
              onClick={() => this.leaveFeedback('good')}
            >
              Good
            </button>
          </li>
          <li className={styles.feedbackBtnListItem}>
            <button
              type="button"
              className={styles.feedbackBtn}
              onClick={() => this.leaveFeedback('neutral')}
            >
              Neutral
            </button>
          </li>
          <li className={styles.feedbackBtnListItem}>
            <button
              type="button"
              className={styles.feedbackBtn}
              onClick={() => this.leaveFeedback('bad')}
            >
              Bad
            </button>
          </li>
        </ul>
        <h2 className={styles.statisticsTitle}>Statistics</h2>
        <ul className={styles.feedbackRatingList}>
          <li className={styles.feedbackRatingListItem}>Good: {good}</li>
          <li className={styles.feedbackRatingListItem}>Neutral: {neutral}</li>
          <li className={styles.feedbackRatingListItem}>Bad: {bad}</li>
          <li className={styles.feedbackRatingListItem}>Total: {totalCount}</li>
          <li className={styles.feedbackRatingListItem}>
            Positive Feedback: {positivePercentage}%
          </li>
        </ul>
      </section>
    );
  }
}

export default Feedback;
