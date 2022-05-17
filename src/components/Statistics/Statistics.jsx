import PropTypes from 'prop-types';

import styles from './statistics.module.css';
import getRandomHexColor from 'randomColor';

const Statistics = ({ title, stats = [] }) => {
  const listItems = stats.map(({ id, label, percentage }) => (
    <li className={styles.item}
      style={{
      backgroundColor: getRandomHexColor(),
    }}
      key={id}>
            <span className={styles.lable}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ));

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {listItems}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
