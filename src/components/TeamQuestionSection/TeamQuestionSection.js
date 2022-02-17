import PropTypes from 'prop-types';

export const TeamQuestionSection = ({ id, question, children }) => {
  return (
    <div className="w-full flex flex-col justify-around" style={{ minHeight: '160px' }} key={id}>
      <div className="w-full flex items-end" style={{ minHeight: '38px' }}>
        <h4 className="w-full text-8 xl:text-12 font-bold">{question}</h4>
      </div>
      <div className="w-full flex flex-row" style={{ minHeight: '160px' }} key={id}>
        {children}
      </div>
    </div>
  );
};

TeamQuestionSection.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
