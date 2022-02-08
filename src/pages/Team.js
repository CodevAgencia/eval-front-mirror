import { useForm } from 'react-hook-form';

import { useApp, useQuestions } from '../hooks';
import { Factory } from '../common/Factory/Factory';
import SharedCircularProgress from '../shared-components/SharedCircularProgress';

const TeamPage = () => {
  const factory = new Factory();
  const { loading } = useApp();
  const { questions } = useQuestions();
  const defaultValues = {};
  questions.forEach((quest) => {
    defaultValues[quest.name] = questions[quest.response];
  });
  // eslint-disable-next-line no-unused-vars
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  const questionsOfRender = questions.map((q) => ({
    ...q,
    control,
    errors: {},
  }));

  return loading ? (
    <SharedCircularProgress />
  ) : (
    <div className="w-full flex flex-col justify-center space-y-12">
      <form className="flex flex-col" onSubmit={handleSubmit(handleOnSubmit)}>
        <h1 className="font-bold">Business Model</h1>
        <div className="w-full flex flex-col items-center space-y-12 my-8">
          <div className="w-full flex flex-wrap">
            {questionsOfRender.length > 0 &&
              questionsOfRender?.map((question) => (
                <div
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-8 space-y-8 flex flex-col justify-around"
                  style={{ minHeight: '160px' }}
                  key={question.id}
                >
                  <div className="w-full flex items-end" style={{ minHeight: '38px' }}>
                    <h4 className="w-full text-8 xl:text-12 font-bold">{question.subtitle}</h4>
                  </div>
                  {factory.create(question)}
                </div>
              ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        >
          Ver
        </button>
      </form>
    </div>
  );
};

export default TeamPage;
