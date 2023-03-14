import React from 'react';
import PropTypes from 'prop-types';
import stat from './Statistics.module.css';

const Statistics = ({ stats, total, positivePercentage }) => {
  const opinion = Object.keys(stats).map(el => {
    return (
      <p className={stat.category} key={el}>
        {el}: {stats[el]}
      </p>
    );
  });

  return (
    <div>
      {opinion}
      <p>Total: {total(stats)} </p>
      <p>Positive feedback: {positivePercentage(stats.good, total(stats))} </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
