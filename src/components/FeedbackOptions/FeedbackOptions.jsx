import { nanoid } from 'nanoid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button key={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
