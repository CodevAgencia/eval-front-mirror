import PropTypes from 'prop-types';

export const Question = ({ id, question, children }) => {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-8 space-y-8 flex flex-col justify-around"
      style={{ minHeight: '160px' }}
      key={id}
    >
      <div className="w-full flex items-end" style={{ minHeight: '38px' }}>
        <h4 className="w-full text-8 xl:text-12 font-bold">{question}</h4>
      </div>
      {children}
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
