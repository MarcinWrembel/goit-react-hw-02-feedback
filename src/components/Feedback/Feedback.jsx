import PropTypes from 'prop-types';
import btn from './Feedback.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnOptions = Object.keys(options).map(e => {
    return (
      <button className={btn.btn} key={e} onClick={onLeaveFeedback}>
        {e}
      </button>
    );
    // return <button className="" key={e}>{stringFromCapitalLetter(e)}</button>;
  });

  return <div className="feedback">{btnOptions}</div>;
};

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
  };

export default FeedbackOptions;
