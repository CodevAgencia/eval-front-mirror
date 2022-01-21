import { useState } from 'react';
import { TextField } from '@mui/material';
import { GeneralQuestions } from '../fake-data/GeneralQuestionsData';
import SharedAutoComplete from '../shared-components';
import SharedDatePicker from '../shared-components/SharedDatePicker';

const initialData = { DG_1: '' };

const GeneralData = () => {
  const [data, setData] = useState(initialData);

  const handleChangeGeneral = (event, value, keyData) => {
    setData({
      ...data,
      [keyData]: value?.label ? value?.label : value?.value,
    });
  };

  return (
    <form className="flex flex-col space-y-16">
      <h1 className="font-bold">Business Model</h1>
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
          {GeneralQuestions.map((question) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-8 space-y-8 flex flex-col"
              style={{ minHeight: '140px' }}
              key={question.id}
            >
              <div className="w-full flex items-end" style={{ minHeight: '38px' }}>
                <h4 className="w-full text-8 xl:text-12 font-bold">{question.subtitle}</h4>
              </div>
              {/* {typeQuestion[question.type]({ ...question, handle: handleChangeGeneral })} */}
              {question.type === 'Lista' && (
                <div>
                  <SharedAutoComplete
                    id={question.id}
                    Data={question.values}
                    handle={handleChangeGeneral}
                    keyData={question.identifierQuestion}
                  />
                </div>
              )}
              {question.type === 'Fecha' && (
                <div>
                  <SharedDatePicker
                    value={new Date()}
                    label={question.title}
                    keyData={question.identifierQuestion}
                    handle={handleChangeGeneral}
                  />
                </div>
              )}
              {question.type === 'Text' && (
                // <SharedTextField
                //   id={question.id}
                //   label={question.title}
                //   name={question.identifierQuestion}
                //   value="valor"
                //   handle={handleChangeGeneral}
                //   errors=""
                // />
                <div>
                  <TextField
                    id={`${question.id.toString()}-${question.identifierQuestion}`}
                    label={question.title}
                    // error={!!errors.name}
                    // helperText={errors.name?.message}
                    name={question.identifierQuestion}
                    size="small"
                    type="text"
                    value=""
                    variant="outlined"
                    className="w-full"
                    placeholder={question.subtitle}
                    onChange={(event) => {
                      handleChangeGeneral(event, event.target.value, question.identifierQuestion);
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default GeneralData;
