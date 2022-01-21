import { useState } from 'react';
import SharedAutoComplete from '../../shared-components';
import { GeneralQuestions } from '../../fake-data/GeneralQuestionsData';
import SharedTextField from '../../shared-components/SharedTextField';
import SharedDatePicker from '../../shared-components/SharedDatePicker';

const initialData = { DG_1: '' };

const typeQuestion = {
  Text: (args) => {
    return <SharedTextField {...args} />;
  },
  Lista: (args) => {
    console.log('hola');
    console.log('Lista', args);
    return (
      <SharedAutoComplete id={args.id} Data={args.Data} handle={args.label} keyData={args.handle} />
    );
  },
  Fecha: (args) => {
    return <SharedDatePicker {...args} />;
  },
};

const General = () => {
  const [data, setData] = useState(initialData);

  const hangleChangeGeneral = (event, value, keyData) => {
    setData({
      ...data,
      [keyData]: value?.label ? value?.label : value?.value,
    });
  };

  return (
    <div className="w-full mt-8">
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
                {typeQuestion[question.type]({ ...question, handle: hangleChangeGeneral })}
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default General;
