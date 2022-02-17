import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Question } from '../components/Question';
import { Factory } from '../common/Factory/Factory';
import { useApp, usePartnert, useQuestions } from '../hooks';
import { GROUPS_FORM, LIST_COMPONENTS } from '../common/constants';
import { TeamQuestionSection } from '../components/TeamQuestionSection';
import SharedCircularProgress from '../shared-components/SharedCircularProgress';

const isTableSimple = (type) => type.slice(0, 10) === 'TABLE_TEAM';

const FormPage = () => {
  const factory = new Factory();
  const { loading } = useApp();
  const { partners } = usePartnert();
  const { groupName } = useParams();

  const groupId = GROUPS_FORM.findIndex((v) => v === groupName);
  // eslint-disable-next-line no-unused-vars
  const { questions, saveResponses } = useQuestions(groupId);
  const defaultValues = {};

  questions.forEach((quest) => {
    defaultValues[quest.name] = questions[quest.response];
  });
  // eslint-disable-next-line no-unused-vars
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const handleOnSubmit = (data) => {
    const parsed = {};
    Object.keys(data).forEach((key) => {
      const p = key.indexOf(':');
      if (p > 0) {
        parsed[key.slice(0, p)] = {
          ...parsed[key.slice(0, p)],
          [key.slice(p + 1)]: data[key],
        };
        parsed[key.slice(0, p)] = JSON.stringify(parsed[key.slice(0, p)]);
      } else {
        parsed[key] = data[key];
      }
    });
    saveResponses(parsed);
    reset();
  };

  const questionsOfRender = questions
    .filter((question) => LIST_COMPONENTS.indexOf(question.type) !== -1)
    .map((q) => ({
      ...q,
      control,
      errors: {},
    }));

  return loading ? (
    <SharedCircularProgress />
  ) : (
    <div className="w-full flex flex-col justify-center space-y-12">
      <form className="flex flex-col" onSubmit={handleSubmit(handleOnSubmit)}>
        <h1 className="font-bold">{groupName}</h1>
        <div className="w-full flex flex-col items-center space-y-12 my-8">
          <div className="w-full flex flex-wrap">
            {questionsOfRender.length > 0 &&
              questionsOfRender?.map((question) =>
                !isTableSimple(question.type) ? (
                  <Question id={question.id} question={question.question}>
                    {factory.create(question)}
                  </Question>
                ) : (
                  <TeamQuestionSection id={question.id} question={question.question}>
                    {partners.map((p) => (
                      <Question question={p.name} id={`${question.code}:${p.id}`}>
                        {factory.create({
                          ...question,
                          code: `${question.code}:${p.id}`,
                          question: p.name,
                          type: question.type.slice(11),
                        })}
                      </Question>
                    ))}
                  </TeamQuestionSection>
                )
              )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default FormPage;
