import { useState } from 'react';
import { TextField } from '@mui/material';
import SharedAutoComplete from '../../shared-components/SharedAutoComplete';
import { TargetPopulationQuestions } from '../../fake-data/marketQuestionsData';

const initialData = { POPN_1: '' };

const TargetPopulation = () => {
  const [data, setData] = useState(initialData);

  const hangleChangeMarketFit = (event, value, keyData) => {
    setData({
      ...data,
      [keyData]: value?.label ? value?.label : value?.value,
    });
  };

  return (
    <div className="w-full mt-8">
      <form className="flex flex-col space-y-16">
        <h1 className="text-red font-bold">Business Model</h1>
        <div className="w-full flex flex-col items-center space-y-12 my-8">
          <button
            type="button"
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              console.log(data);
            }}
          >
            Ver
          </button>
          <div className="w-full flex flex-wrap">
            {TargetPopulationQuestions.map((question) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-8 space-y-8 flex flex-col justify-between"
                style={{ minHeight: '140px' }}
                key={question.id}
              >
                <div className="w-full flex items-end" style={{ minHeight: '38px' }}>
                  <h4 className="w-full text-8 xl:text-12 font-bold">{question.subtitle}</h4>
                </div>
                {question.type === 'Text' ? (
                  <div className="w-full">
                    <TextField
                      id={question.identifierQuestion}
                      label={question.title}
                      // error={!!errors.name}
                      // helperText={errors.name?.message}
                      name={question.identifierQuestion}
                      type="text"
                      value=""
                      variant="outlined"
                      className="w-full"
                      placeholder={question.title}
                      onChange={(event) => console.log(event.target.value)}
                      size="small"
                    />
                  </div>
                ) : (
                  <SharedAutoComplete
                    id={question.idInput}
                    Data={question.values}
                    placeLabel={question.title}
                    keyData={question.identifierQuestion}
                    handle={hangleChangeMarketFit}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TargetPopulation;
