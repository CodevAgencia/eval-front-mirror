import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { previousSituationModel } from '../../utils/model/generalModel';
import SharedTypeInputForm from '../../shared-components/SharedTypeInputForm';
import { PreviousSituationQuestions } from '../../fake-data/GeneralQuestionsData';
import { previousSituationSchema } from '../../utils/validations/generalDataValidates';
import { changeForm } from '../../store/app/generalFormSlice';
import SharedCircularProgress from '../../shared-components/SharedCircularProgress';
import { findIndexList } from '../../utils/findIndexList';

const PreviousSituation = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(previousSituationModel);
  const [namesValues, setNamesValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { control, setValue, formState, handleSubmit, reset, trigger, setError, getValues } =
    useForm({
      mode: 'onChange',
      defaultValues: previousSituationModel,
      resolver: yupResolver(previousSituationSchema),
    });

  const { isValid, dirtyFields, errors } = formState;

  const handleChangeGeneral = (value, keyData) => {
    setData({ ...data, [keyData]: value });
    setValue(keyData, value);
  };

  const handleOnSubmit = (submitData) => {
    console.log('asdasd');
    console.log(submitData);
    // console.log(getValues());
    dispatch(changeForm('veracityOfData'));
    return false;
  };

  // const findIndexList = (listValues) => {
  //   const index = listValues.findIndex((item) => item.value === data[namesValues[item.name]]);
  //   return index > -1 ? index : 0;
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SharedCircularProgress />;
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleOnSubmit)}>
      <h1 className="font-bold">Previous Situaction</h1>
      <div className="w-full flex flex-col items-center space-y-12 my-8">
        <div className="w-full flex flex-wrap">
          {PreviousSituationQuestions.map((question) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-8 space-y-8 flex flex-col justify-around"
              style={{ minHeight: '160px' }}
              key={question.id}
            >
              <div className="w-full flex items-end" style={{ minHeight: '38px' }}>
                <h4 className="w-full text-8 xl:text-12 font-bold">{question.subtitle}</h4>
              </div>
              <SharedTypeInputForm
                type={question.type}
                question={question}
                errors={errors}
                control={control}
                setValue={setValue}
                data={data}
                setData={setData}
                handle={handleChangeGeneral}
                listIndex={findIndexList(question.values)}
              />
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
  );
};

export default PreviousSituation;
